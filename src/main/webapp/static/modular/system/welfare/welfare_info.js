/**
 * 初始化福利详情对话框
 */
var WelfareInfoDlg = {
    welfareInfoData : {}
};

/**
 * 清除数据
 */
WelfareInfoDlg.clearData = function() {
    this.welfareInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
WelfareInfoDlg.set = function(key, val) {
    this.welfareInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
WelfareInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
WelfareInfoDlg.close = function() {
    parent.layer.close(window.parent.Welfare.layerIndex);
}

/**
 * 收集数据
 */
WelfareInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
WelfareInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/welfare/add", function(data){
        Feng.success("添加成功!");
        window.parent.Welfare.table.refresh();
        WelfareInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.welfareInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
WelfareInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/welfare/update", function(data){
        Feng.success("修改成功!");
        window.parent.Welfare.table.refresh();
        WelfareInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.welfareInfoData);
    ajax.start();
}

$(function() {

});
