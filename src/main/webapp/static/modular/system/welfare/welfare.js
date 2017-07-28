/**
 * 奖金管理初始化
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
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
        {title: '员工编号', field: 'personal_id', align: 'center', valign: 'middle', sortable: true},
        {title: '机构名称', field: 'OrgName', align: 'center', valign: 'middle', sortable: true},
        {title: '部门名称', field: 'DeptName', align: 'center', valign: 'middle', sortable: true},
        {title: '职务补贴', field: 'post_allowance', align: 'center', valign: 'middle', sortable: true},
        {title: '交通补贴', field: 'traffic_allowance', align: 'center', valign: 'middle', sortable: true},
        {title: '伙食补贴', field: 'meal_allowance', align: 'center', valign: 'middle', sortable: true},
        {title: '通信费', field: 'communication_fee', align: 'center', valign: 'middle', sortable: true},
        {title: '独生子女费', field: 'only_child_fee', align: 'center', valign: 'middle', sortable: true},
        {title: '防暑降温费', field: 'sunstroke_fee', align: 'center', valign: 'middle', sortable: true},
        {title: '劳保妇女费', field: 'pro_women_fee', align: 'center', valign: 'middle', sortable: true},
        {title: '值班补贴', field: 'duty_allowance', align: 'center', valign: 'middle', sortable: true},
        {title: '特殊岗位津贴', field: 'special_post_allowance', align: 'center', valign: 'middle', sortable: true},
        {title: '水电补贴', field: 'hydropower_allowance', align: 'center', valign: 'middle', sortable: true},
        {title: '文具费', field: 'stationery_expenses', align: 'center', valign: 'middle', sortable: true},
        {title: '住房补贴', field: 'housing_allowance', align: 'center', valign: 'middle', sortable: true},
        {title: '远郊补贴', field: 'outskirts_allowannce', align: 'center', valign: 'middle', sortable: true},
        {title: '保密费', field: 'secrecy_fee', align: 'center', valign: 'middle', sortable: true},
        {title: '外派津贴', field: 'expatriate_allowance', align: 'center', valign: 'middle', sortable: true},
        {title: '住房公积金', field: 'housing_fund', align: 'center', valign: 'middle', sortable: true},
        {title: '养老保险', field: 'endowment_insurance', align: 'center', valign: 'middle', sortable: true},
        {title: '医疗保险', field: 'medical_insurance', align: 'center', valign: 'middle', sortable: true},
        {title: '工伤保险', field: 'employment_injury_insurance', align: 'center', valign: 'middle', sortable: true},
        {title: '生育保险', field: 'maternity_insurance', align: 'center', valign: 'middle', sortable: true},
        {title: '失业保险', field: 'unemployment_insurance', align: 'center', valign: 'middle', sortable: true},
        {title: '年/月', field: 'wf_date', align: 'center', valign: 'middle', sortable: true},
        {title: '岗位名称', field: 'PostName', align: 'center', valign: 'middle', sortable: true},
        {field:"operate",title:"操作",align:"center",valign:"middle",formatter:function(value,row,index){
            return "<a href='javascript:;' onclick='Welfare.openWelfareDetail()'>修改</a>&nbsp;&nbsp;<a href='javascript:;' onclick='Welfare.delete()'>删除</a>";
        }}
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
 * 点击添加奖金
 */
Welfare.openAddWelfare = function () {
    var index = layer.open({
        type: 2,
        title: '添加奖金',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/welfare/welfare_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看奖金详情
 */
Welfare.openWelfareDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '奖金详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/welfare/welfare_update/' + Welfare.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除奖金
 */
Welfare.delete = function () {
    if (this.check()) {

        var operation = function () {
            var id = Welfare.seItem.id;
            var ajax = new $ax(Feng.ctxPath + "/welfare/delete", function (data) {
                Feng.success("删除成功!");
                Welfare.table.refresh();
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("id",id);
            ajax.start();
        };

        Feng.confirm("是否删除此条奖金数据" + Welfare.seItem.id + "?",operation);
    }
};

/**
 * 查询奖金列表
 */
Welfare.search = function () {
    var queryData = {};
    queryData['personal_id'] = $("#personal_id").val();
    queryData['OrgName'] = $("#OrgName").val();
    queryData['DeptName'] = $("#DeptName").val();
    queryData['post_allowance'] = $("#post_allowance").val();
    queryData['traffic_allowance'] = $("#traffic_allowance").val();
    queryData['meal_allowance'] = $("#meal_allowance").val();
    queryData['communication_fee'] = $("#communication_fee").val();
    queryData['only_child_fee'] = $("#only_child_fee").val();
    queryData['sunstroke_fee'] = $("#sunstroke_fee").val();
    queryData['pro_women_fee'] = $("#pro_women_fee").val();
    queryData['duty_allowance'] = $("#duty_allowance").val();
    queryData['special_post_allowance'] = $("#special_post_allowance").val();
    queryData['hydropower_allowance'] = $("#hydropower_allowance").val();
    queryData['stationery_expenses'] = $("#stationery_expenses").val();
    queryData['housing_allowance'] = $("#housing_allowance").val();
    queryDate['secrecy_fee']= $("#secrecy_fee").val();
    queryData['outskirts_allowannce'] = $("#outskirts_allowannce").val();
    queryData['expatriate_allowance'] = $("#expatriate_allowance").val();
    queryData['housing_fund'] = $("#housing_fund").val();
    queryData['endowment_insurance'] = $("#endowment_insurance").val();
    queryData['medical_insurance'] = $("#medical_insurance").val();
    queryData['employment_injury_insurance'] = $("#employment_injury_insurance").val();
    queryData['maternity_insurance'] = $("#maternity_insurance").val();
    queryData['unemployment_insurance'] = $("#unemployment_insurance").val();
    queryData['wf_date'] = $("#wf_date").val();
    queryData['PostName'] = $("#PostName").val();
    console.log(queryData);
    Welfare.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Welfare.initColumn();
    var table = new BSTable(Welfare.id, "/welfare/list", defaultColunms);
    table.setPaginationType("client");
    Welfare.table = table.init();
});
