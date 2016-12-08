if (window.define) {
    define('smui', module.exports)
}
if (window.Vue) {
    define('vue', function () {
        return window.Vue
    })
}
window.$SMUI = module.exports

exports.Dialog = require('./Dialog');
exports.Calendar = require('./Calendar.vue');
exports.DatePicker = require('./DatePicker.vue');
exports.DropList = require('./DropList.vue');
exports.FieldTip = require('./FieldTip.vue');
exports.Info = require('./Info.vue');
exports.LineBox = require('./LineBox.vue');
exports.Pager = require('./Pager.vue');
exports.PressTab = require('./PressTab.vue');
exports.UiProgress = require('./Progress.vue');
exports.RichTable = require('./RichTable.vue');
exports.Schedule = require('./Schedule.vue');
exports.Scrum = require('./Scrum.vue');
exports.SearchBox = require('./SearchBox.vue');
exports.SelectList = require('./SelectList.vue');
exports.Tab = require('./Tab.vue');
exports.UiTable = require('./Table.vue');
exports.Tree = require('./Tree.vue');
exports.DatePicker = require('./DatePicker.vue');