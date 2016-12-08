<template>
<div class="search-box">
    <input type="text" :placeholder="title" name="search-word">
    <span class="search-icon">
        <span class="sm-search"></span>
    </span>
</div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            title: '搜索计划／单元'
        }
    }
}
</script>

<style type="text/css" lang="less">
.search-box {
    height: 39px;
    font-size: 13px;
    padding-right: 60px;
    position: relative;
    color: grey;
    border-bottom: 1px solid #e4e4e4;
    input {
        border: 0;
        height: 36px;
        font-size: 13px;
        padding-left: 16px;
        width: 145px;
        outline: none;
    }
    .search-icon {
        height: 39px;
        width: 30px;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        color: #d0d0d0;
        text-align: center;
        line-height: 39px;
        cursor: pointer;
    }
}
</style>