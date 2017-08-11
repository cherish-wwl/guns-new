/**
 * 奖金管理初始化
 */
var Bonus = {
    id: "BonusTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Bonus.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
        {title: '人员', field: 'personal_id', align: 'center', valign: 'middle', sortable: true},
        {title: '机构名称', field: 'OrgName', align: 'center', valign: 'middle', sortable: true},
        {title: '部门名称', field: 'DeptName', align: 'center', valign: 'middle', sortable: true},
        {title: '绩效奖金', field: 'achievements_bounus', align: 'center', valign: 'middle', sortable: true},
        {title: '年度奖金', field: 'year_bounus', align: 'center', valign: 'middle', sortable: true},
        {title: '季度奖金', field: 'quarter_bounus', align: 'center', valign: 'middle', sortable: true},
        {title: '开拓奖金', field: 'explore_bounus', align: 'center', valign: 'middle', sortable: true},
        {title: '全勤奖金', field: 'attendance_bounus', align: 'center', valign: 'middle', sortable: true},
        {title: '特别年薪奖', field: 'special_bounus', align: 'center', valign: 'middle', sortable: true},
        {title: '日期', field: 'bo_date', align: 'center', valign: 'middle', sortable: true},
        {title: '岗位名称', field: 'PostName', align: 'center', valign: 'middle', sortable: true},
        {field:"operate",title:"操作",align:"center",valign:"middle",width:'80px',formatter:function(value,row,index){
            return "<a href='javascript:;' onclick='Bonus.openBonusDetail()'>修改</a>&nbsp;&nbsp;<a href='javascript:;' onclick='Bonus.delete()'>删除</a>";
        }}
    ];
};

/**
 * 检查是否选中
 */
Bonus.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Bonus.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加奖金
 */
Bonus.openAddBonus = function () {
    var index = layer.open({
        type: 2,
        title: '添加奖金',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/bonus/bonus_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看奖金详情
 */
Bonus.openBonusDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '奖金详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/bonus/bonus_update/' + Bonus.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除奖金
 */
Bonus.delete = function () {
    if (this.check()) {
        var operation = function () {
            var id = Bonus.seItem.id;
            var ajax = new $ax(Feng.ctxPath + "/bonus/delete", function (data) {
                Feng.success("删除成功!");
                Bonus.table.refresh();
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("id", id);
            ajax.start();
        };
        Feng.confirm("是否删除此条奖金数据" + Bonus.seItem.id + "?",operation);
    }
};

/**
 * 查询奖金列表
 */
Bonus.search = function () {
    var queryData = {};
    queryData['personal_id'] = $("#personalId").val();
    queryData['OrgName'] = $("#OrgName").val();
    queryData['DeptName'] = $("#DeptName").val();
    queryData['achievements_bounus'] = $("#achievementsBounus").val();
    queryData['year_bounus'] = $("#yearBounus").val();
    queryData['quarter_bounus'] = $("#quarterBounus").val();
    queryData['explore_bounus'] = $("#exploreBounus").val();
    queryData['attendance_bounus'] = $("#attendanceBounus").val();
    queryData['special_bounus'] = $("#specialBounus").val();
    queryData['bo_date'] = $("#boDate").val();
    queryData['PostName'] = $("#PostName").val();
    console.log(queryData);
    Bonus.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Bonus.initColumn();
    var table = new BSTable(Bonus.id, "/bonus/list", defaultColunms);
    table.setPaginationType("client");
    Bonus.table = table.init();
});
