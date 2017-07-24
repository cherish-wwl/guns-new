package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.modular.system.dao.SalaryWebDao;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by Cherish on 2017/7/5.
 */
@Controller
@RequestMapping("/salaryWeb")
public class SalaryWebController extends BaseController {

    private static String PREFIX = "/Salaryweb/";
    @Resource
    private SalaryWebDao salaryWebDao;
    /**
     * 跳转到查看管理员列表的页面
     */
    @RequestMapping("/about")
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
    }

    @RequestMapping("/trade")
    @ResponseBody
    public List<Map<String,Object>> trade()throws Exception{
        List<Map<String,Object>> map = salaryWebDao.selectTrades();
        System.out.println(map);
        return map;
    }

    @RequestMapping("/tradeSecond")
    @ResponseBody
    public Object tradeSecond(String gradecode)throws Exception{
        List list = salaryWebDao.selectSonByTrades(gradecode);
        System.out.println(list);
        return list;
    }

    @RequestMapping("/tradeThird")
    @ResponseBody
    public String tradeThird(String parentId)throws Exception{
        List list = salaryWebDao.selectThirdByParentId(parentId);
        System.out.println(list);
        return "123";
    }

    @RequestMapping(value = "/tradeGroupMethod1",method = RequestMethod.POST)
    @ResponseBody
    public String tradeGroupMethod1()throws Exception{
        List list = salaryWebDao.selectGroupMethod1();
        System.out.println(list);
        return "111";
    }
    /*@RequestMapping("/tradeSon")
    public String tradeSon()throws Exception{
        return "111";
    }*/

}
