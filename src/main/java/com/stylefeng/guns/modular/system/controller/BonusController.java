package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.common.annotion.Permission;
import com.stylefeng.guns.common.constant.Const;
import com.stylefeng.guns.common.constant.cache.Cache;
import com.stylefeng.guns.common.constant.tips.Tip;
import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.common.exception.BizExceptionEnum;
import com.stylefeng.guns.common.exception.BussinessException;
import com.stylefeng.guns.common.persistence.model.Bonus;
import com.stylefeng.guns.core.cache.CacheKit;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.core.util.ToolUtil;
import com.stylefeng.guns.modular.system.dao.BonusDao;
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
 * 奖金控制器
 *
 * @author fengshuonan
 * @Date 2017-07-24 12:48:19
 */
@Controller
@RequestMapping("/bonus")
public class BonusController extends BaseController {

    private String PREFIX = "/system/bonus/";

    @Resource
    private BonusDao bonusDao;

    /**
     * 跳转到奖金首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "bonus.html";
    }

    /**
     * 跳转到添加奖金
     */
    @RequestMapping("/bonus_add")
    public String bonusAdd() {
        return PREFIX + "bonus_add.html";
    }

    /**
     * 跳转到修改奖金
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping("/bonus_update/{bonusId}")
    public String bonusUpdate(@PathVariable Integer bonusId, Model model) {
        if (ToolUtil.isEmpty(bonusId)) {
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        Bonus bonus = this.bonusDao.selectById(bonusId);
        model.addAttribute(bonus);
        LogObjectHolder.me().set(bonus);//被修改的been临时存放
        return PREFIX + "bonus_edit.html";
    }

    /**
     * 获取奖金列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list() {
        List<Map<String,Object>> list = bonusDao.selectBonus();
        return list;
    }

    /**
     * 新增奖金
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Tip add(Bonus bonus) {
        bonusDao.add(bonus);
        return SUCCESS_TIP;
    }

    /**
     * 删除奖金
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Tip delete(@RequestParam Integer id) {
        if(ToolUtil.isEmpty(id)){
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        bonusDao.deleteById(id);
        //删除缓存
        CacheKit.removeAll(Cache.CONSTANT);
        return SUCCESS_TIP;
    }


    /**
     * 修改奖金
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(@Valid Bonus bonus,BindingResult result) {
        if (result.hasErrors()) {
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        this.bonusDao.updateBonus(bonus);
        return super.SUCCESS_TIP;
    }

    /**
     * 奖金详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
