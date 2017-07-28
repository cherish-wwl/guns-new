package com.stylefeng.guns.modular.system.trade;

import java.util.Date;

/**
 * Created by Cherish on 2017/7/20.
 */
public class Trade {
    private int tradeId;
    private String tradcode;
    private String grandcode;
    private String granddescription;
    private String parentId;
    private String Parentdescription;
    private String tradeName;
    private String description;
    private Date create_date;
    private String create_by;
    private String create_name;
    private Date update_date;
    private String update_by;
    private String update_name;

    public int getTradeId() {
        return tradeId;
    }

    public void setTradeId(int tradeId) {
        this.tradeId = tradeId;
    }

    public String getUpdate_name() {
        return update_name;
    }

    public void setUpdate_name(String update_name) {
        this.update_name = update_name;
    }

    public String getUpdate_by() {
        return update_by;
    }

    public void setUpdate_by(String update_by) {
        this.update_by = update_by;
    }

    public Date getUpdate_date() {
        return update_date;
    }

    public void setUpdate_date(Date update_date) {
        this.update_date = update_date;
    }

    public String getCreate_name() {
        return create_name;
    }

    public void setCreate_name(String create_name) {
        this.create_name = create_name;
    }

    public String getCreate_by() {
        return create_by;
    }

    public void setCreate_by(String create_by) {
        this.create_by = create_by;
    }

    public Date getCreate_date() {
        return create_date;
    }

    public void setCreate_date(Date create_date) {
        this.create_date = create_date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTradeName() {
        return tradeName;
    }

    public void setTradeName(String tradeName) {
        this.tradeName = tradeName;
    }

    public String getParentdescription() {
        return Parentdescription;
    }

    public void setParentdescription(String parentdescription) {
        Parentdescription = parentdescription;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getGranddescription() {
        return granddescription;
    }

    public void setGranddescription(String granddescription) {
        this.granddescription = granddescription;
    }

    public String getGrandcode() {
        return grandcode;
    }

    public void setGrandcode(String grandcode) {
        this.grandcode = grandcode;
    }

    public String getTradcode() {
        return tradcode;
    }

    public void setTradcode(String tradcode) {
        this.tradcode = tradcode;
    }
}
