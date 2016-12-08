## 表格组件

> smui.RichTable

### 特性 Feature

- 展现列表数据

- 自定义表头

- 锁定表头

- 选择行

- 自定义列宽

### 参数 Params

<table>

    <tr>

         <td>名称</td>

         <td>类型</td>

         <td>意义</td>

    </tr>

    <tr>
        <td>fields</td>
        <td>Array[String]</td>
        <td>字段数组</td>
    </tr>
    <tr>
         <td>items</td>
         <td>Array[String]</td>
         <td>字段数组</td>
    </tr>
    <tr>
         <td>cellTextMap</td>
         <td>Array[String]</td>
         <td>字段数组</td>
    </tr>
    <tr>
         <td>headTextMap</td>
         <td>Array</td>
         <td>字段数组</td>
    </tr>
    <tr>
    <td>selected</td>
         <td>Array[&gt;Number&gt;</td>
         <td>已选择行</td>
    </tr>
    <td>fieldWidth</td>
         <td>Object &gt; string, string&gt;</td>
         <td>字段数组</td>
    </tr>
</table>


var params = {
    cellTextMap: {},
    headTextMap: {},
    selected: [],
    fields: [],
    items: [],
    fieldWidth: {}
}

* selectedRows - 选择行号

* selected  - 已选择元素列表

### 方法: metods

* setItems(items)* setFields(fields)* setOptions(options)

### 事件: events

* CHANGE_SELECTED* CLICKED

## 用例: usage

```html

<rich-table :fields="fields" :items="items" v-ref:table></rich-table>

<script type="text/javascript">

let tableConf = { headTextMap: { name: '姓名', age: '年龄', score: '成绩' }, cellTextMap: { name(value, item) { return `<div data-action="editName"> ${value} </div>` } }, actions: { editName (e) { var item = e.data; Dialog.prompt('姓名', function (value) { item.name = value; }); } }};

export default { data() { return { fields: ['name', 'age', 'score'], items: [] } }, ready() { // 一次给表格设置属性 this.$refs.table.setOptions(tableConf); }, methods: { renderTable(data) { this.$refs.table.setItems(data.list) } }}</script>

```

