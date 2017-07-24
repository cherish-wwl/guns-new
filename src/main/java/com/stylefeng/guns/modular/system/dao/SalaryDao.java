package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.common.persistence.model.Salary;

import java.util.List;
import java.util.Map;

/**
 * 工资的dao
 * Created by Allan on 2017/7/21.
 */
public interface SalaryDao {

    /**
     * 查询工资列表
     * @return
     */
    List<Map<String,Object>> selectSalaries();

    void add(Salary salary);

    void deleteById(Integer id);

    Salary selectById(Integer salaryId);

    void updateSalary(Salary salary);

}
