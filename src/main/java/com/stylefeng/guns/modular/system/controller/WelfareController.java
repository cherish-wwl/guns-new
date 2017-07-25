package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.common.annotion.Permission;
import com.stylefeng.guns.common.constant.Const;
import com.stylefeng.guns.common.constant.cache.Cache;
import com.stylefeng.guns.common.constant.tips.Tip;
import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.common.exception.BizExceptionEnum;
import com.stylefeng.guns.common.exception.BussinessException;
import com.stylefeng.guns.common.persistence.model.Welfare;
import com.stylefeng.guns.core.cache.CacheKit;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.core.util.ToolUtil;
import com.stylefeng.guns.modular.system.dao.WelfareDao;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 * 福利控制器
 *
 * @author fengshuonan
 * @Date 2017-07-24 13:09:59
 */
@Controller
@RequestMapping("/welfare")
public class WelfareController extends BaseController {

    private String PREFIX = "/system/welfare/";

    @Resource
    private WelfareDao welfareDao;

    /**
     * 跳转到福利首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "welfare.html";
    }

    /**
     * 跳转到添加福利
     */
    @RequestMapping("/welfare_add")
    public String welfareAdd() {
        return PREFIX + "welfare_add.html";
    }

    /**
     * 跳转到修改福利
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping("/welfare_update/{welfareId}")
    public String welfareUpdate(@PathVariable Integer welfareId, Model model) {
        if (ToolUtil.isEmpty(welfareId)) {
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        Welfare welfare = this.welfareDao.selectById(welfareId);
        model.addAttribute(welfare);
        LogObjectHolder.me().set(welfare);//被修改的been临时存放
        return PREFIX + "welfare_edit.html";
    }

    /**
     * 获取福利列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list() {
        List<Map<String,Object>> list = welfareDao.selectWelfares();
        System.out.println(list);
        return list;
    }

    /**
     * 新增福利
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Welfare welfare) {
        welfareDao.add(welfare);
        return SUCCESS_TIP;
    }

    /**
     * 删除福利
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Tip delete(@RequestParam Integer id) {
        if(ToolUtil.isEmpty(id)){
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        welfareDao.deleteById(id);
        //删除缓存
        CacheKit.removeAll(Cache.CONSTANT);
        return SUCCESS_TIP;
    }


    /**
     * 修改福利
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping(value = "/update")
    @ResponseBody
    public Tip update(@Valid Welfare welfare, BindingResult result) {
        if (result.hasErrors()) {
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        this.welfareDao.updateWelfare(welfare);
        return super.SUCCESS_TIP;
    }

    /**
     * 福利详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail(@PathVariable("welfareId") Integer welfareId) {
        return welfareDao.selectById(welfareId);
    }
}
