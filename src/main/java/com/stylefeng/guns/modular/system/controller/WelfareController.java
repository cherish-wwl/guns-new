package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

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
    @RequestMapping("/welfare_update/{welfareId}")
    public String welfareUpdate(@PathVariable Integer welfareId, Model model) {
        return PREFIX + "welfare_edit.html";
    }

    /**
     * 获取福利列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增福利
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除福利
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改福利
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 福利详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
