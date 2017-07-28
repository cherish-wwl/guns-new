package com.stylefeng.guns.common.persistence.model;

/**
 * 工资数据表
 * Created by Allan on 2017/7/21.
 */
public class Salary {

    private Integer id;

    private String OrgName;
    private String personal_id;
    private Integer DeptID;
    private String DeptName;
    private String PostName;
    private String ParentTradid;
    private String TradID;
    private String EmpName;
    private Double base_salary;
    private Double post_salary;
    private Double grade_salary;
    private Double years_salary;
    private Double skill_salary;
    private Double archives_salary;
    private Double overtime_salary;
    private String sal_date;
    private String region;
    private Integer StatFlag;
    private String reserve2;
    private String reserve3;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOrgName() {
        return OrgName;
    }

    public void setOrgName(String orgName) {
        OrgName = orgName;
    }

    public String getPersonal_id() {
        return personal_id;
    }

    public void setPersonal_id(String personal_id) {
        this.personal_id = personal_id;
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

    public Double getBase_salary() {
        return base_salary;
    }

    public void setBase_salary(Double base_salary) {
        this.base_salary = base_salary;
    }

    public Double getPost_salary() {
        return post_salary;
    }

    public void setPost_salary(Double post_salary) {
        this.post_salary = post_salary;
    }

    public Double getGrade_salary() {
        return grade_salary;
    }

    public void setGrade_salary(Double grade_salary) {
        this.grade_salary = grade_salary;
    }

    public Double getYears_salary() {
        return years_salary;
    }

    public void setYears_salary(Double years_salary) {
        this.years_salary = years_salary;
    }

    public Double getSkill_salary() {
        return skill_salary;
    }

    public void setSkill_salary(Double skill_salary) {
        this.skill_salary = skill_salary;
    }

    public Double getArchives_salary() {
        return archives_salary;
    }

    public void setArchives_salary(Double archives_salary) {
        this.archives_salary = archives_salary;
    }

    public Double getOvertime_salary() {
        return overtime_salary;
    }

    public void setOvertime_salary(Double overtime_salary) {
        this.overtime_salary = overtime_salary;
    }

    public String getSal_date() {
        return sal_date;
    }

    public void setSal_date(String sal_date) {
        this.sal_date = sal_date;
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

}
