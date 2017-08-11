package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.common.persistence.model.Results;

import java.util.List;
import java.util.Map;

/**
 * 中长期和年度业绩Dao
 *
 * @author fengshuonan
 * @Date 2017-07-31 16:20:35
 */
public interface ResultsDao {

    List<Map<String,Object>> selectResults();
    void add(Results results);

    void deleteById(Integer id);

    Results selectById(Integer resultsId);

    void updateResults(Results results);
}
