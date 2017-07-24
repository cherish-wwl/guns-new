/**
 * 初始化测试详情对话框
 */
var SalaryInfoDlg = {
    salaryInfoData : {}
};

/**
 * 清除数据
 */
SalaryInfoDlg.clearData = function() {
    this.salaryInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
SalaryInfoDlg.set = function(key, val) {
    this.salaryInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
SalaryInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
SalaryInfoDlg.close = function() {
    parent.layer.close(window.parent.Salary.layerIndex);
}

/**
 * 收集数据
 */
SalaryInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
SalaryInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/salary/add", function(data){
        Feng.success("添加成功!");
        window.parent.Salary.table.refresh();
        SalaryInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.salaryInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
SalaryInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/salary/update", function(data){
        Feng.success("修改成功!");
        window.parent.Salary.table.refresh();
        SalaryInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.salaryInfoData);
    ajax.start();
}

$(function() {

});
