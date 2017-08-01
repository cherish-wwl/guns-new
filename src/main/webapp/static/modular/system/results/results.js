/**
 * 中长期和年度业绩管理初始化
 */
var Results = {
    id: "ResultsTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Results.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
        {title: '行业编码', field: 'tradeId', align: 'center', valign: 'middle', sortable: true},
        {title: '股权', field: 'stockRight', align: 'center', valign: 'middle', sortable: true},
        {title: '期权', field: 'optionPay', align: 'center', valign: 'middle', sortable: true},
        {title: '分红', field: 'dra', align: 'center', valign: 'middle', sortable: true},
        {title: '任期薪', field: 'tenurePay', align: 'center', valign: 'middle', sortable: true},
        {title: '人员流动率', field: 'employeeTurnover', align: 'center', valign: 'middle', sortable: true},
        {title: '利润增长率', field: 'profitGrowth', align: 'center', valign: 'middle', sortable: true},
        {title: '销售量增长率', field: 'salesGrowth', align: 'center', valign: 'middle', sortable: true},
        {title: '资产额', field: 'assets', align: 'center', valign: 'middle', sortable: true},
        {title: '人员编号', field: 'personalId', align: 'center', valign: 'middle', sortable: true},
        {field:"operate",title:"操作",align:"center",valign:"middle",width:'80px',formatter:function(value,row,index){
            return "<a href='javascript:;' onclick='Results.openResultsDetail()'>修改</a>&nbsp;&nbsp;<a href='javascript:;' onclick='Results.delete()'>删除</a>";
        }}
    ];
};

/**
 * 检查是否选中
 */
Results.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Results.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加中长期和年度业绩
 */
Results.openAddResults = function () {
    var index = layer.open({
        type: 2,
        title: '添加中长期和年度业绩',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/results/results_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看中长期和年度业绩详情
 */
Results.openResultsDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '中长期和年度业绩详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/results/results_update/' + Results.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除中长期和年度业绩
 */
Results.delete = function () {
    if (this.check()) {
        var operation = function () {
            var id = Results.seItem.id;
            var ajax = new $ax(Feng.ctxPath + "/results/delete", function (data) {
                Feng.success("删除成功!");
                Results.table.refresh();
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("id", id);
            ajax.start();
        };
        Feng.confirm("是否删除此条数据" + Results.seItem.id + "?",operation);
    }
};

/**
 * 查询中长期和年度业绩列表
 */
Results.search = function () {
    var queryData = {};
    queryData['tradeId'] = $("#tradeId").val();
    queryData['stockRight'] = $("#stockRight").val();
    queryData['optionPay'] = $("#optionPay").val();
    queryData['dra'] = $("#dra").val();
    queryData['tenurePay'] = $("#tenurePay").val();
    queryData['employeeTurnover'] = $("#employeeTurnover").val();
    queryData['profitGrowth'] = $("#profitGrowth").val();
    queryData['salesGrowth'] = $("#salesGrowth").val();
    queryData['assets'] = $("#assets").val();
    queryData['personalId'] = $("#personalId").val();
    console.log(queryData);
    Results.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Results.initColumn();
    var table = new BSTable(Results.id, "/results/list", defaultColunms);
    table.setPaginationType("client");
    Results.table = table.init();
});
