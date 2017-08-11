package com.stylefeng.guns.common.persistence.model;

/**
 * 工资数据表
 * Created by Allan on 2017/7/21.
 */
public class Salary {

    private Integer id;

    private String OrgName;
    private String personalId;
    private Integer DeptID;
    private String DeptName;
    private String PostName;
    private String ParentTradid;
    private String TradID;
    private String EmpName;
    private Double baseSalary;
    private Double postSalary;
    private Double gradeSalary;
    private Double yearsSalary;
    private Double skillSalary;
    private Double archivesSalary;
    private Double overtimeSalary;
    private String salDate;
    private String region;
    private Integer StatFlag;
    private String reserve2;
    private String reserve3;

    public String getOrgName() {
        return OrgName;
    }

    public void setOrgName(String orgName) {
        OrgName = orgName;
    }

    public String getPersonalId() {
        return personalId;
    }

    public void setPersonalId(String personalId) {
        this.personalId = personalId;
    }

    public Integer getDeptID() {
        return DeptID;
    }

    public void setDeptID(Integer deptID) {
        DeptID = deptID;
    }

    public String getDeptName() {
        return DeptName;
    }

    public void setDeptName(String deptName) {
        DeptName = deptName;
    }

    public String getPostName() {
        return PostName;
    }

    public void setPostName(String postName) {
        PostName = postName;
    }

    public String getParentTradid() {
        return ParentTradid;
    }

    public void setParentTradid(String parentTradid) {
        ParentTradid = parentTradid;
    }

    public String getTradID() {
        return TradID;
    }

    public void setTradID(String tradID) {
        TradID = tradID;
    }

    public String getEmpName() {
        return EmpName;
    }

    public void setEmpName(String empName) {
        EmpName = empName;
    }

    public Double getBaseSalary() {
        return baseSalary;
    }

    public void setBaseSalary(Double baseSalary) {
        this.baseSalary = baseSalary;
    }

    public Double getPostSalary() {
        return postSalary;
    }

    public void setPostSalary(Double postSalary) {
        this.postSalary = postSalary;
    }

    public Double getGradeSalary() {
        return gradeSalary;
    }

    public void setGradeSalary(Double gradeSalary) {
        this.gradeSalary = gradeSalary;
    }

    public Double getYearsSalary() {
        return yearsSalary;
    }

    public void setYearsSalary(Double yearsSalary) {
        this.yearsSalary = yearsSalary;
    }

    public Double getSkillSalary() {
        return skillSalary;
    }

    public void setSkillSalary(Double skillSalary) {
        this.skillSalary = skillSalary;
    }

    public Double getArchivesSalary() {
        return archivesSalary;
    }

    public void setArchivesSalary(Double archivesSalary) {
        this.archivesSalary = archivesSalary;
    }

    public Double getOvertimeSalary() {
        return overtimeSalary;
    }

    public void setOvertimeSalary(Double overtimeSalary) {
        this.overtimeSalary = overtimeSalary;
    }

    public String getSalDate() {
        return salDate;
    }

    public void setSalDate(String salDate) {
        this.salDate = salDate;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public Integer getStatFlag() {
        return StatFlag;
    }

    public void setStatFlag(Integer statFlag) {
        StatFlag = statFlag;
    }

    public String getReserve2() {
        return reserve2;
    }

    public void setReserve2(String reserve2) {
        this.reserve2 = reserve2;
    }

    public String getReserve3() {
        return reserve3;
    }

    public void setReserve3(String reserve3) {
        this.reserve3 = reserve3;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
