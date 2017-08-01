/**
 * 初始化中长期和年度业绩详情对话框
 */
var ResultsInfoDlg = {
    resultsInfoData : {},
    validateFields: {
        tradeId: {
            validators: {
                notEmpty: {
                    message: '行业编码不能为空'
                }
            }
        },
        stockRight: {
            validators: {
                notEmpty: {
                    message: '股权不能为空'
                }
            }
        },
        optionPay: {
            validators: {
                notEmpty: {
                    message: '期权不能为空'
                }
            }
        },
        dra: {
            validators: {
                notEmpty: {
                    message: '分红不能为空'
                }
            }
        },
        tenurePay: {
            validators: {
                notEmpty: {
                    message: '任期薪不能为空'
                }
            }
        },
        employeeTurnover: {
            validators: {
                notEmpty: {
                    message: '人员流动率不能为空'
                }
            }
        },
        profitGrowth: {
            validators: {
                notEmpty: {
                    message: '利润增长率不能为空'
                }
            }
        },
        salesGrowth: {
            validators: {
                notEmpty: {
                    message: '销售量增长率不能为空'
                }
            }
        },
        assets: {
            validators: {
                notEmpty: {
                    message: '资产额不能为空'
                }
            }
        },
        personalId: {
            validators: {
                notEmpty: {
                    message: '人员编号不能为空'
                }
            }
        }
    }
};

/**
 * 清除数据
 */
ResultsInfoDlg.clearData = function() {
    this.resultsInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ResultsInfoDlg.set = function(key, val) {
    this.resultsInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ResultsInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
ResultsInfoDlg.close = function() {
    parent.layer.close(window.parent.Results.layerIndex);
}

/**
 * 收集数据
 */
ResultsInfoDlg.collectData = function() {
    this.set('id').set('tradeId').set('stockRight').set('optionPay').set('dra').set('tenurePay').set('employeeTurnover').set('profitGrowth').set('salesGrowth').set('assets').set('personalId');
}
/**
 * 验证数据是否为空
 */
ResultsInfoDlg.validate = function(){
    $("#resultsInfoForm").data("bootstrapValidator").resetForm();
    $("#resultsInfoForm").bootstrapValidator('validate');
    return $('#resultsInfoForm').data('bootstrapValidator').isValid();
}

/**
 * 提交添加
 */
ResultsInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if(!this.validate()){
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/results/add", function(data){
        Feng.success("添加成功!");
        window.parent.Results.table.refresh();
        ResultsInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.resultsInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
ResultsInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if(!this.validate()){
        return;
    }
    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/results/update", function(data){
        Feng.success("修改成功!");
        window.parent.Results.table.refresh();
        ResultsInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.resultsInfoData);
    ajax.start();
}

$(function() {
//初始化bootstrapValidator
    Feng.initValidator("resultsInfoForm",ResultsInfoDlg.validateFields);
});
