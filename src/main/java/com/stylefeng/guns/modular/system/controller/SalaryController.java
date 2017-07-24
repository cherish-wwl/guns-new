package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.common.annotion.Permission;
import com.stylefeng.guns.common.constant.Const;
import com.stylefeng.guns.common.constant.cache.Cache;
import com.stylefeng.guns.common.constant.tips.Tip;
import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.common.exception.BizExceptionEnum;
import com.stylefeng.guns.common.exception.BussinessException;
import com.stylefeng.guns.common.persistence.dao.SalaryMapper;
import com.stylefeng.guns.common.persistence.model.Salary;
import com.stylefeng.guns.core.cache.CacheKit;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.core.util.ToolUtil;
import com.stylefeng.guns.modular.system.dao.SalaryDao;
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
 * 测试控制器
 *
 * @author fengshuonan
 * @Date 2017-07-21 12:30:22
 */
@Controller
@RequestMapping("/salary")
public class SalaryController extends BaseController {

    private String PREFIX = "/system/salary/";

    @Resource
    private SalaryDao salaryDao;

    @Resource
    private SalaryMapper salaryMapper;

    /**
     * 跳转到工资首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "salary.html";
    }

    /**
     * 跳转到添加测试
     */
    @RequestMapping("/salary_add")
    public String salaryAdd() {
        return PREFIX + "salary_add.html";
    }

    /**
     * 跳转到修改页面
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping("/salary_update/{salaryId}")
    public String salaryUpdate(@PathVariable Integer salaryId, Model model) {
        if (ToolUtil.isEmpty(salaryId)) {
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        Salary salary = this.salaryDao.selectById(salaryId);
        model.addAttribute(salary);
        LogObjectHolder.me().set(salary);//被修改的been临时存放
        return PREFIX + "salary_edit.html";
    }

    /**
     * 获取薪酬列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list() {
        List<Map<String,Object>> list = salaryDao.selectSalaries();
        System.out.println(list);
        return list;
    }

    /**
     * 新增工资
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Tip add(Salary salary) {
        salaryDao.add(salary);
        return SUCCESS_TIP;
    }

    /**
     * 删除薪酬数据
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Tip delete(@RequestParam Integer id) {
        if(ToolUtil.isEmpty(id)){
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        salaryDao.deleteById(id);
        //删除缓存
        CacheKit.removeAll(Cache.CONSTANT);
        return SUCCESS_TIP;
    }


    /**
     * 修改
     */
    @Permission(Const.ADMIN_NAME)
    @RequestMapping(value = "/update")
    @ResponseBody
    public Tip update(@Valid Salary salary,BindingResult result) {
        if (result.hasErrors()) {
            throw new BussinessException(BizExceptionEnum.REQUEST_NULL);
        }
        this.salaryDao.updateSalary(salary);
        return super.SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
