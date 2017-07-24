/**
 * 初始化测试详情对话框
 */
var SalaryInfoDlg = {
    salaryInfoData : {},
    validateFields: {
        personal_id: {
            validators: {
                notEmpty: {
                    message: '员工编号不能为空'
                }
            }
        },
        base_salary: {
            validators: {
                notEmpty: {
                    message: '基本工资不能为空'
                }
            }
        },
        post_salary: {
            validators: {
                notEmpty: {
                    message: '岗位工资不能为空'
                }
            }
        },
        grade_salary: {
            validators: {
                notEmpty: {
                    message: '薪级工资不能为空'
                }
            }
        },
        years_salary: {
            validators: {
                notEmpty: {
                    message: '工龄工资不能为空'
                }
            }
        },
        archives_salary: {
            validators: {
                notEmpty: {
                    message: '档案工资不能为空'
                }
            }
        },
        skill_salary: {
            validators: {
                notEmpty: {
                    message: '技能工资不能为空'
                }
            }
        },
        overtime_salary: {
            validators: {
                notEmpty: {
                    message: '加班工资不能为空'
                }
            }
        },
        sal_date: {
            validators: {
                notEmpty: {
                    message: '请填写年月，格式：yyyy.mm'
                }
            }
        }
    }
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
    this.set('id').set('personal_id').set('base_salary').set('post_salary').set('years_salary').set('grade_salary').set('skill_salary').set('archives_salary').set('overtime_salary').set('sal_date');
}
/**
 * 验证数据是否为空
 */
SalaryInfoDlg.validate = function(){
    $("#salaryInfoForm").data("bootstrapValidator").resetForm();
    $("#salaryInfoForm").bootstrapValidator('validate');
    return $('salaryInfoForm').data('bootstrapValidator').isValid();
}
/**
 * 提交添加
 */
SalaryInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    if(!this.validate()){
        return
    }
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
    //初始化bootstrapValidator
    Feng.initValidator("salaryInfoForm",SalaryInfoDlg.validateFields);
});
