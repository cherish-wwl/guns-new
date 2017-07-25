package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.common.persistence.model.Welfare;

import java.util.List;
import java.util.Map;

/**
 * 福利Dao
 *
 * @author fengshuonan
 * @Date 2017-07-24 13:09:59
 */
public interface WelfareDao {
    /**
     * 查询工资列表
     * @return
     */
    List<Map<String,Object>> selectWelfares();

    void add(Welfare welfare);

    void deleteById(Integer id);

    Welfare selectById(Integer welfareId);

    void updateWelfare(Welfare welfare);

}
