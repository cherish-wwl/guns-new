package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.modular.system.dao.SalaryDao;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Cherish on 2017/7/5.
 */
@Controller
@RequestMapping("/salaryWeb")
public class SalaryWebController extends BaseController {

    private static String PREFIX = "/Salaryweb/";
    @Resource
    private SalaryDao salaryDao;
    /**
     * 跳转到查看管理员列表的页面
     */
    /*@RequestMapping("/about")
     public String about() {
        return PREFIX + "about.html";
    }

    @RequestMapping("/services")
    public String services() {
        return PREFIX + "services.html";
    }

    @RequestMapping("/portfolio3col")
    public String portfolio3col() {
        return PREFIX + "portfolio3col.html";
    }

    @RequestMapping("/blog")
    public String blog() {
        return PREFIX + "blog.html";
    }

    @RequestMapping("/blogSingle")
    public String blogSingle() {
        return PREFIX + "blog-single.html";
    }*/

    @RequestMapping("/trade")
    @ResponseBody
    public String trade()throws Exception{
        List list = salaryDao.selectTrades();
        System.out.println(list);
        return "111";
    }

    @RequestMapping("/tradeSecond")
    @ResponseBody
    public String tradeSecond(String gradecode)throws Exception{
        List list = salaryDao.selectSonByTrades(gradecode);
        System.out.println(list);
        return "123";
    }

    @RequestMapping("/tradeThird")
    @ResponseBody
    public String tradeThird(String parentId)throws Exception{
        List list = salaryDao.selectThirdByParentId(parentId);
        System.out.println(list);
        return "123";
    }
    /*@RequestMapping("/tradeSon")
    public String tradeSon()throws Exception{
        return "111";
    }*/

}
