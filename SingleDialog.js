var Dialog = require('./Dialog');
var lastDialog = null;
module.exports = function(params) {
    if (lastDialog && lastDialog.close) {
        lastDialog.close();
    }
    lastDialog = new Dialog(params);
    return lastDialog;
};