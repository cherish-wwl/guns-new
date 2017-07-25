/**
 * 初始化测试详情对话框
 */
var BonusInfoDlg = {
    bonusInfoData : {},
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
        achievements_bounus: {
            validators: {
                notEmpty: {
                    message: '绩效奖金不能为空'
                }
            }
        },
        year_bounus: {
            validators: {
                notEmpty: {
                    message: '年度奖金不能为空'
                }
            }
        },
        quarter_bounus: {
            validators: {
                notEmpty: {
                    message: '季度奖金不能为空'
                }
            }
        },
        explore_bounus: {
            validators: {
                notEmpty: {
                    message: '开拓奖金不能为空'
                }
            }
        },
        attendance_bounus: {
            validators: {
                notEmpty: {
                    message: '全勤奖金不能为空'
                }
            }
        },
        special_bounus: {
            validators: {
                notEmpty: {
                    message: '特别年薪奖不能为空'
                }
            }
        },
        bo_date: {
            validators: {
                notEmpty: {
                    message: '请填写日期，格式：yyyy.mm'
                }
            }
        },
        PostName: {
            validators: {
                notEmpty: {
                    message: '岗位名称不能为空'
                }
            }
        }
    }
};

/**
 * 清除数据
 */
BonusInfoDlg.clearData = function() {
    this.bonusInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BonusInfoDlg.set = function(key, val) {
    this.bonusInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BonusInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
BonusInfoDlg.close = function() {
    parent.layer.close(window.parent.Bonus.layerIndex);
}

/**
 * 收集数据
 */
BonusInfoDlg.collectData = function() {
    this.set('id').set('personal_id').set('OrgName').set('DeptName').set('achievements_bounus').set('year_bounus').set('quarter_bounus').set('explore_bounus').set('attendance_bounus').set('special_bounus').set('bo_date').set('PostName');
}
/**
 * 验证数据是否为空
 */
BonusInfoDlg.validate = function(){
    $("#bonusInfoForm").data("bootstrapValidator").resetForm();
    $("#bonusInfoForm").bootstrapValidator('validate');
    return $('#bonusInfoForm').data('bootstrapValidator').isValid();
}
/**
 * 提交添加
 */
BonusInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    if(!this.validate()){
        return
    }
    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/bonus/add", function(data){
        Feng.success("添加成功!");
        window.parent.Bonus.table.refresh();
        BonusInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.bonusInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
BonusInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/bonus/update", function(data){
        Feng.success("修改成功!");
        window.parent.Bonus.table.refresh();
        BonusInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.bonusInfoData);
    ajax.start();
}

$(function() {
    //初始化bootstrapValidator
    Feng.initValidator("bonusInfoForm",BonusInfoDlg.validateFields);
});
