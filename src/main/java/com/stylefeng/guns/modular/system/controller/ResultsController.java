package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.common.annotion.Permission;
import com.stylefeng.guns.common.constant.Const;
import com.stylefeng.guns.common.constant.cache.Cache;
import com.stylefeng.guns.common.constant.tips.Tip;
import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.common.exception.BizExceptionEnum;
import com.stylefeng.guns.common.exception.BussinessException;
import com.stylefeng.guns.common.persistence.model.Results;
import com.stylefeng.guns.core.cache.CacheKit;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.core.util.ToolUtil;
import com.stylefeng.guns.modular.system.dao.ResultsDao;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 * 中长期和年度业绩控制器
 *
 * @author fengshuonan
 * @Date 2017-07-31 16:20:35
 */
@Controller
@RequestMapping("/results")
public class ResultsController extends BaseController {

    private String PREFIX = "/system/results/";

    @Resource
    private ResultsDao resultsDao;

    /**
     * 跳转到中长期和年度业绩首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "results.html";
    }

    /**
     * 跳转到添加中长期和年度业绩
     */
    @RequestMapping("/results_add")
    public String resultsAdd() {
        return PREFIX + "results_add.html";
    }

    /**
     * 跳转到修改中长期和年度业绩
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping("/results_update/{resultsId}")
    public String resultsUpdate(@PathVariable Integer resultsId, Model model) {
        if (ToolUtil.isEmpty(resultsId)) {
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        Results results = this.resultsDao.selectById(resultsId);
        model.addAttribute(results);
        LogObjectHolder.me().set(results);//被修改的been临时存放
        return PREFIX + "results_edit.html";
    }

    /**
     * 获取中长期和年度业绩列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list() {
        List<Map<String,Object>> list = resultsDao.selectResults();
        return list;
    }

    /**
     * 新增中长期和年度业绩
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Tip add(Results results) {
       resultsDao.add(results);
        return SUCCESS_TIP;
    }

    /**
     * 删除中长期和年度业绩
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Tip delete(@RequestParam Integer id) {
        if(ToolUtil.isEmpty(id)){
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        resultsDao.deleteById(id);
        //删除缓存
        CacheKit.removeAll(Cache.CONSTANT);
        return SUCCESS_TIP;
    }


    /**
     * 修改中长期和年度业绩
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(@Valid Results results,BindingResult result) {
        if (result.hasErrors()) {
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        this.resultsDao.updateResults(results);
        return super.SUCCESS_TIP;
    }

    /**
     * 中长期和年度业绩详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
