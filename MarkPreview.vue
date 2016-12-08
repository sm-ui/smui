<template>
<div class="mark-preview">
    <div v-html="marked(content)"></div>
</div>
</template>

<script type="text/javascript">
import markdown from 'marked'

export default {
    props: {
        content: {
            type: String,
            default: '',
            sync: true
        }
    },
    methods: {
        marked: function (value) {
            return markdown.parse(value)
        }
    }
}

</script>

<style type="text/css" lang="less">
.mark-preview {
    h1,h2,h3,h4 {
        font-weight: bold;
        font-size: 1.5em;
        line-height: 1.5em;
        padding: 10px;
        margin: 10px 0;
    }

    h1 {
        font-size: 3em;
        border-left: 3px solid lightblue;
        background-color: #EEE;
    }

    h2 {
        font-size: 2em;
        border-left: 3px solid lightblue;
        background-color: #EEE;
    }

    pre {
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.7);
        margin: 10px 0;
        border: 1px solid #EEE;
        border-left: 5px solid #EEE;
    }
    
    blockquote {
        border: 1px solid #EEE;
        border-radius: 2px;
        padding: 10px;
    }

    ul {
        margin-left: 2em;
    }
    li {
        list-style-type: square;
    }
    code {
        background-color: #EEE;
        border: 1px solid #ECC;
        margin: 0 2px;
        border-radius: 2px;
    }



    pre code {
        background-color: #FFF;
        border: none;
        margin: 0 2px;
    }
}
</style>