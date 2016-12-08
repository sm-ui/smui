<template>
<div>
    <rich-table :params="tableConf" v-ref:table></rich-table>
    <pager 
       :params="pageInfo"
       @page-change="changePage"
       @size-change="changeSize"
       @list-change="changeList"
       v-ref:pager>
    </pager>
</div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import smui from 'smui'

let list = new Array(400).fill(1).map(function(item, idx) {
    return {
        name: 'xx' + idx,
        idx: idx,
        score: idx % 37 + 87
    }
});

let tableConf = {
    fields: ['name', 'score'],
    items: []
}

module.exports = {
    data: function () {
        return {
            tableConf: tableConf,
            pageInfo: {
                currentPage: 1,
                items: list,
                pageSize: 20
            }
        }
    },
    methods: {
        changePage(e) {
            Object.assign(this.pageInfo, e.data)
        },
        changeSize(e) {
            Object.assign(this.pageInfo, e.data)
        },
        changeList(e) {
            let list = e.data.list;
            this.$refs.table.items = list;
        }
    },
    components: smui
}
</script>