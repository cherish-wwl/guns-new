package com.stylefeng.guns.common.persistence.model;

/**
 * Created by Allan on 2017/7/24.
 */
public class Bonus {

    private Integer id;
    private String personal_id;
    private String OrgName;
    private String DeptID;
    private String DeptName;
    private Double achievements_bounus;
    private Double year_bounus;
    private Double quarter_bounus;
    private Double explore_bounus;
    private Double attendance_bounus;
    private Double special_bounus;
    private String bo_date;
    private String reserve1;
    private String reserve2;
    private String reserve3;
    private String PostName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPersonal_id() {
        return personal_id;
    }

    public void setPersonal_id(String personal_id) {
        this.personal_id = personal_id;
    }

    public String getOrgName() {
        return OrgName;
    }

    public void setOrgName(String orgName) {
        OrgName = orgName;
    }

    public String getDeptID() {
        return DeptID;
    }

    public void setDeptID(String deptID) {
        DeptID = deptID;
    }

    public String getDeptName() {
        return DeptName;
    }

    public void setDeptName(String deptName) {
        DeptName = deptName;
    }

    public Double getAchievements_bounus() {
        return achievements_bounus;
    }

    public void setAchievements_bounus(Double achievements_bounus) {
        this.achievements_bounus = achievements_bounus;
    }

    public Double getYear_bounus() {
        return year_bounus;
    }

    public void setYear_bounus(Double year_bounus) {
        this.year_bounus = year_bounus;
    }

    public Double getQuarter_bounus() {
        return quarter_bounus;
    }

    public void setQuarter_bounus(Double quarter_bounus) {
        this.quarter_bounus = quarter_bounus;
    }

    public Double getExplore_bounus() {
        return explore_bounus;
    }

    public void setExplore_bounus(Double explore_bounus) {
        this.explore_bounus = explore_bounus;
    }

    public Double getAttendance_bounus() {
        return attendance_bounus;
    }

    public void setAttendance_bounus(Double attendance_bounus) {
        this.attendance_bounus = attendance_bounus;
    }

    public Double getSpecial_bounus() {
        return special_bounus;
    }

    public void setSpecial_bounus(Double special_bounus) {
        this.special_bounus = special_bounus;
    }

    public String getBo_date() {
        return bo_date;
    }

    public void setBo_date(String bo_date) {
        this.bo_date = bo_date;
    }

    public String getReserve1() {
        return reserve1;
    }

    public void setReserve1(String reserve1) {
        this.reserve1 = reserve1;
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

    public String getPostName() {
        return PostName;
    }

    public void setPostName(String postName) {
        PostName = postName;
    }
}
