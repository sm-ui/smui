<template>
<div class="mark-box">
    <div class="mark-editor">
        <textarea v-model="content" @keyup="changeContent"></textarea>
    </div>
    <mark-preview :content.sync="content" v-ref:preview></mark-preview>
</div>
</template>

<script type="text/javascript">
import MarkPreview from './MarkPreview.vue'

export default {
    data() {
        return {
            content: '# title'
        }
    },
    components: {MarkPreview},
    methods: {
        changeContent() {
            this.$refs.preview.content = this.content;
        }
    }
}
</script>

<style type="text/css" lang="less">
.mark-box {
    position: relative;
    .mark-editor {
        margin-right: 450px;
        height: 300px;
        textarea {
            width: 100%;
            height: 100%;
            font-size: 1.5em;
            line-height: 2em;
            border: 1px solid #FFF;
            color: #333;
            padding: 10px;
            outline: none;
            line-height: 1.5em;
            border-radius: 5px;
            box-shadow: 10px 5px rgba(200,200,200,0.3);
            background-color: lightyellow;
        }
    }
    .mark-preview {
        display: inline-block;
        width: 400px;
        box-sizing: border-box;
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>