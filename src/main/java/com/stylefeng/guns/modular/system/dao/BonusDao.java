package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.common.persistence.model.Bonus;

import java.util.List;
import java.util.Map;

/**
 * 奖金Dao
 *
 * @author fengshuonan
 * @Date 2017-07-24 12:48:19
 */
public interface BonusDao {
    /**
     * 查询奖金列表
     * @return
     */
    List<Map<String,Object>> selectBonus();
    void add(Bonus bonus);

    void deleteById(Integer id);

    Bonus selectById(Integer bonusId);

    void updateBonus(Bonus bonus);

}
