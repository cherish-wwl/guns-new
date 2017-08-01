package com.stylefeng.guns.common.persistence.model;

/**
 * Created by Allan on 2017/7/31.
 * 中长期和年度业绩Entity
 */
public class Results {
    private Integer id;  //主键
    private String tradeId;//行业编码
    private String stockRight;//股权
    private String optionPay;//期权
    private Double dra;//分红
    private Double tenurePay;//任期薪
    private Float employeeTurnover;//员工流动率
    private Float profitGrowth;//利润增长率
    private Float salesGrowth;//销售量增长率
    private Double assets;//资产额
    private String personalId;//人员编号

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTradeId() {
        return tradeId;
    }

    public void setTradeId(String tradeId) {
        this.tradeId = tradeId;
    }

    public String getStockRight() {
        return stockRight;
    }

    public void setStockRight(String stockRight) {
        this.stockRight = stockRight;
    }

    public String getOptionPay() {
        return optionPay;
    }

    public void setOptionPay(String optionPay) {
        this.optionPay = optionPay;
    }

    public Double getDra() {
        return dra;
    }

    public void setDra(Double dra) {
        this.dra = dra;
    }

    public Double getTenurePay() {
        return tenurePay;
    }

    public void setTenurePay(Double tenurePay) {
        this.tenurePay = tenurePay;
    }

    public Float getEmployeeTurnover() {
        return employeeTurnover;
    }

    public void setEmployeeTurnover(Float employeeTurnover) {
        this.employeeTurnover = employeeTurnover;
    }

    public Float getProfitGrowth() {
        return profitGrowth;
    }

    public void setProfitGrowth(Float profitGrowth) {
        this.profitGrowth = profitGrowth;
    }

    public Float getSalesGrowth() {
        return salesGrowth;
    }

    public void setSalesGrowth(Float salesGrowth) {
        this.salesGrowth = salesGrowth;
    }

    public Double getAssets() {
        return assets;
    }

    public void setAssets(Double assets) {
        this.assets = assets;
    }

    public String getPersonalId() {
        return personalId;
    }

    public void setPersonalId(String personalId) {
        this.personalId = personalId;
    }
}
