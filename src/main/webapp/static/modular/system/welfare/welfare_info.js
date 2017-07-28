/**
 * 初始化福利详情对话框
 */
var WelfareInfoDlg = {
    welfareInfoData : {},
    validateFields: {
        personal_id: {
            validators: {
                notEmpty: {
                    message: '员工编号不能为空'
                }
            }
        },
        OrgName: {
            validators: {
                notEmpty: {
                    message: '机构名称不能为空'
                }
            }
        },
        DeptName: {
            validators: {
                notEmpty: {
                    message: '部门名称不能为空'
                }
            }
        },
        wf_date: {
            validators: {
                notEmpty: {
                    message: '请填写日期，格式为：yyyy.MM'
                }
            }
        },
        PostName: {
            validators: {
                notEmpty: {
                    message: '职位不能为空'
                }
            }
        }
    }
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
    this.set('id').set('personal_id').set('OrgName').set('DeptID').set('DeptName').set('post_allowance').set('housing_allowance').set('traffic_allowance').set('meal_allowance').set('communication_fee').set('only_child_fee').set('sunstroke_fee').set('pro_women_fee').set('duty_allowance').set('special_post_allowance').set('hydropower_allowance').set('stationery_expenses').set('outskirts_allowannce').set('secrecy_fee').set('expatriate_allowance').set('housing_fund').set('endowment_insurance').set('medical_insurance').set('employment_injury_insurance').set('maternity_insurance').set('unemployment_insurance').set('wf_date').set('PostName');
}
/**
 * 验证数据是否为空
 */
WelfareInfoDlg.validate = function () {
    $('#welfareInfoForm').data("bootstrapValidator").resetForm();
    $('#welfareInfoForm').bootstrapValidator('validate');
    return $("#welfareInfoForm").data('bootstrapValidator').isValid();
}
/**
 * 提交添加
 */
WelfareInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if(!this.validate()){
        return;
    }
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
    if(!this.validate()){
        return;
    }
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
    //初始化bootstrapValidator
    Feng.initValidator("welfareInfoForm",WelfareInfoDlg.validateFields);
});
