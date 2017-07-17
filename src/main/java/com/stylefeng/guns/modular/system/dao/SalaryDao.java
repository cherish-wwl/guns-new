package com.stylefeng.guns.modular.system.dao;

import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * Created by Allan on 2017/7/13.
 * 薪酬相关的dao
 */
public interface SalaryDao {
    /**
     * 遍历行业列表
     * @param
     * @return
     */
    List<Map<String,Object>> selectTrades();

    /**
     * 根据行业id查询其下的专业列表
     * @param tradeId
     * @return
     */
    List<Map<String,Object>> selectMajorNameByTradeId(@Param("tradeId") String tradeId);

   /* *//**
     * 分组查询行业下的专业
     * @param tradeId
     * @return
     *//*
    List<Map<String,Object>> selectMajorByGroup(@Param("trade") String tradeId);*/


}
