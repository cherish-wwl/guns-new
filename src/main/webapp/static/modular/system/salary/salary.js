/**
 * 测试管理初始化
 */
var Salary = {
    id: "SalaryTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Salary.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
        {title: '人员', field: 'personal_id', align: 'center', valign: 'middle', sortable: true},
        {title: '基本工资', field: 'base_salary', align: 'center', valign: 'middle', sortable: true},
        {title: '岗位工资', field: 'post_salary', align: 'center', valign: 'middle', sortable: true},
        {title: '薪级工资', field: 'grade_salary', align: 'center', valign: 'middle', sortable: true},
        {title: '工龄工资', field: 'years_salary', align: 'center', valign: 'middle', sortable: true},
        {title: '技能工资', field: 'skill_salary', align: 'center', valign: 'middle', sortable: true},
        {title: '档案工资', field: 'archives_salary', align: 'center', valign: 'middle', sortable: true},
        {title: '加班工资', field: 'overtime_salary', align: 'center', valign: 'middle', sortable: true},
        {title: '年月', field: 'sal_date', align: 'center', valign: 'middle', sortable: true},
        {field:"operate",title:"操作",align:"center",valign:"middle",formatter:function(value,row,index){
            return "<a href='javascript:;' onclick='Salary.openSalaryDetail()'>修改</a>&nbsp;&nbsp;<a href='javascript:;' onclick='Salary.delete()'>删除</a>";
        }}
    ];
};

/**
 * 检查是否选中
 */
Salary.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Salary.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加测试
 */
Salary.openAddSalary = function () {
    var index = layer.open({
        type: 2,
        title: '添加工资',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/salary/salary_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看工资详情
 */
Salary.openSalaryDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '工资详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/salary/salary_update/' + Salary.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除工资
 */
Salary.delete = function () {
    if (this.check()) {
        var operation = function () {
            var id = Salary.seItem.id;
            var ajax = new $ax(Feng.ctxPath + "/salary/delete", function (data) {
                Feng.success("删除成功!");
                Salary.table.refresh();
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("id", id);
            ajax.start();
        };
        Feng.confirm("是否删除此条工资数据" + Salary.seItem.id + "?",operation);
    }

};

/**
 * 查询薪酬列表
 */
Salary.search = function () {
    var queryData = {};
    queryData['personal_id'] = $("#personalId").val();
    queryData['base_salary'] = $("#baseSalary").val();
    queryData['post_salary'] = $("#postSalary").val();
    queryData['grade_salary'] = $("#gradeSalary").val();
    queryData['years_salary'] = $("#yearsSalary").val();
    queryData['skill_salary'] = $("#skillSalary").val();
    queryData['archives_salary'] = $("#archivesSalary").val();
    queryData['overtime_salary'] = $("#overtimeSalary").val();
    queryData['sal_date'] = $("#salDate").val();
    queryData['edit'] = $("#edit").val();
    console.log(queryData);
    Salary.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Salary.initColumn();
    var table = new BSTable(Salary.id, "/salary/list", defaultColunms);
    table.setPaginationType("client");
    Salary.table = table.init();
});
