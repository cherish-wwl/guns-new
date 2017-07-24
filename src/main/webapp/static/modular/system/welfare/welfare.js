/**
 * 福利管理初始化
 */
var Welfare = {
    id: "WelfareTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Welfare.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Welfare.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Welfare.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加福利
 */
Welfare.openAddWelfare = function () {
    var index = layer.open({
        type: 2,
        title: '添加福利',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/welfare/welfare_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看福利详情
 */
Welfare.openWelfareDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '福利详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/welfare/welfare_update/' + Welfare.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除福利
 */
Welfare.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/welfare/delete", function (data) {
            Feng.success("删除成功!");
            Welfare.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("welfareId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询福利列表
 */
Welfare.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Welfare.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Welfare.initColumn();
    var table = new BSTable(Welfare.id, "/welfare/list", defaultColunms);
    table.setPaginationType("client");
    Welfare.table = table.init();
});
