<template id="prompt-tmpl">
<div class="prompt-content" :class="{inline: inline}">
    <div v-if="tip">{{tip}}</div>
    <input type="text" @change="validate" v-if="type=='text'" class="text" name="content" v-model="value"/>
    <input type="number" @change="validate" v-if="type=='number'" :max="max" :min="min" :step="step" v-model="value"/>
</div>
</template>

<script type="text/javascript">
var Dialog = require('./Dialog');
var Vue = require('vue');
var Promotion = {};

module.exports = Promotion = Vue.extend({
    data() {
        return {
            tip: '',
            type: 'text'
        }
    },
    methods: {
        ensure: function () {
            if (this.validate()) {
                this.$emit('FINISHED', {data: option});
            }
        },
        validate: function (e) {
            if (e && e.target) {
                this.error = e.target.validationMessage;
                return !this.error;
            }
            if (this.error) {
                return !this.error;
            }
            else {
                return !this.$el.querySelector('input:invalid');
            }
        }
    },
    events: {
        ensure: function () {
            if (this.validate()) {
                this.$dispatch('FINISHED', {data: option});
                return true;
            }
            return false;
        }
    }
});

exports.alert = function (message, ensure, customConfig) {
    var dialog = new Dialog({
        data: {
            width: '200'
        }
    });

    if ('string' === typeof message) {
        message = {
            content: message,
            needClose: false,
            needCancel: false
        };
        if ('object' === typeof customConfig) {
            Object.assign(message, customConfig);
        }
    }

    dialog.showModal(message);
    dialog.$on('ensure', function () {
        ensure && ensure.call(dialog);
        dialog.close();
    });
    return dialog;
};

exports.confirm = function (message, ensure, cancel) {
    var dialog = new Dialog({
        data: {
            width: 200,
            needClose: false,
            needCancel: true
        }
    });

    if ('string' === typeof message) {
        message = {
            content: message,
        }
    }

    dialog.showModal(message);
    dialog.$on('ensure', function () {
        ensure && ensure.call(dialog);
        dialog.close();
    });

    dialog.$on('closed', function () {
        cancel && cancel.call(dialog);
    });
    return dialog;
};



exports.prompt = function (option, ensure, cancel) {
    if (typeof option === 'string') {
        option = {
            title: option,
            type: 'text'
        }
    }

    if (option.options) {
        option.type = 'select';
    }
    if (!option.type) {
        option.type = 'text';
    }
    if (!option.error) {
        option.error = '';
    }
    option.needClose = false;

    var c = option.container;
    var dialog = new Dialog({
        container: c,
        data: option,
        content: Promotion
    });

    if (option.container) {
        dialog.show(option);
    }
    else {
        dialog.showModal();
    }

    dialog.$on('ensure', function () {
        ensure && ensure.call(dialog, option.value);
        dialog.close();
    });

    dialog.$on('cancel', function () {
        cancel && cancel.call(dialog);
        dialog.close();
    });
    return dialog;
};

exports.inlineEdit = function (option, ensure, cancel) {
    option = Object.assign(option, {inline: true, needClose: true, needFooter: true});
    return exports.prompt(option, ensure, cancel);
};

Object.assign(Dialog, exports);

</script>

<style type="text/css" lang="less">

.alert {
    .dialog {
        width: 300px;
    }
}

.prompt-content input {
    line-height: 20px;
}
.prompt-content.inline .text{
    width: 50%;
    float: left;
    margin: 2px 0;
}

.prompt-content .field-tip {
    display: block;
    position: static;
}

.prompt-content.inline button {
    width: 30%;
    min-width: 50px;
    border: 1px solid white;
    background-color: #4593ff;
    color: #FFF;
    float: right;
    margin-right: 5px;
    border-radius: 5px;
}
</style>