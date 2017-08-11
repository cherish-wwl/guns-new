/**
 * 初始化福利详情对话框
 */
var WelfareInfoDlg = {
    welfareInfoData : {},
    validateFields: {
        personalId: {
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
        wfDate: {
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
    this.set('id').set('personalId').set('OrgName').set('DeptID').set('DeptName').set('postAllowance').set('housingAllowance').set('trafficAllowance').set('mealAllowance').set('communicationFee').set('onlyChildFee').set('sunstrokeFee').set('proWomenFee').set('dutyAllowance').set('specialPostAllowance').set('hydropowerAllowance').set('stationeryExpenses').set('outskirtsAllowannce').set('secrecyFee').set('expatriateAllowance').set('housingFund').set('endowmentInsurance').set('medicalInsurance').set('employmentInjuryInsurance').set('maternityInsurance').set('unemploymentInsurance').set('wfDate').set('PostName');

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
