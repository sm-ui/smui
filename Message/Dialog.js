import UDialog from "./UDialog.vue"
import Vue from "Vue"

var Dialog = {}

if (Vue.version.charAt(0) > 1) {
    Dialog = function(option) {
        option.extends = UDialog
        return new Vue(option)
    }
}
else if (Vue.extend) {
    Dialog = Vue.extend({
        mixins: [UDialog],
        el() {
            var dom = document.createElement('div');
            dom.class = 'dialog-instance';
            document.body.appendChild(dom);
            return dom;
        }
    })
}

module.exports = Dialog