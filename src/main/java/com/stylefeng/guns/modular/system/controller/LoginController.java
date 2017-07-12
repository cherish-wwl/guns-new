package com.stylefeng.guns.modular.system.controller;

import com.google.code.kaptcha.Constants;
import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.common.exception.BizExceptionEnum;
import com.stylefeng.guns.common.exception.BussinessException;
import com.stylefeng.guns.common.exception.InvalidKaptchaException;
import com.stylefeng.guns.common.node.MenuNode;
import com.stylefeng.guns.common.persistence.dao.UserMapper;
import com.stylefeng.guns.common.persistence.model.User;
import com.stylefeng.guns.core.log.LogManager;
import com.stylefeng.guns.core.log.factory.LogTaskFactory;
import com.stylefeng.guns.core.shiro.ShiroKit;
import com.stylefeng.guns.core.shiro.ShiroUser;
import com.stylefeng.guns.core.util.ToolUtil;
import com.stylefeng.guns.modular.system.dao.MenuDao;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

import static com.stylefeng.guns.core.support.HttpKit.getIp;

/**
 * 登录控制器
 *
 * @author fengshuonan
 * @Date 2017年1月10日 下午8:25:24
 */
@Controller
public class LoginController extends BaseController {

    @Autowired
    MenuDao menuDao;

    @Autowired
    UserMapper userMapper;

    /**
     * 跳转到主页
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(Model model) {
        //获取菜单列表
        List<Integer> roleList = ShiroKit.getUser().getRoleList();
        if(roleList == null || roleList.size() == 0){
            ShiroKit.getSubject().logout();
            model.addAttribute("tips", "该用户没有角色，无法登陆");
            return "/login.html";
        }
        List<MenuNode> menus = menuDao.getMenusByRoleIds(roleList);
        List<MenuNode> titles = MenuNode.buildTitle(menus);
        model.addAttribute("titles", titles);

        //获取用户头像
        Integer id = ShiroKit.getUser().getId();
        User user = userMapper.selectById(id);
        String avatar = user.getAvatar();
        model.addAttribute("avatar", avatar);

        return "/index.html";
    }

    /**
     * 跳转到登录页面
     */
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
        if (ShiroKit.isAuthenticated() || ShiroKit.getUser() != null) {
            return REDIRECT + "/";
        } else {
            return "/login.html";
        }
    }

    /**
     * 跳转到首页页面
     */
    @RequestMapping(value = "/salaryIndex", method = RequestMethod.GET)
    public String salaryIndex() {
            return "/Salaryweb/index.html";
    }

    /**
     * 跳转到平台介绍页面
     */
    @RequestMapping(value = "/salaryWeb/salaryIndexAbout", method = RequestMethod.GET)
    public String salaryIndexAbout() {
        return "/Salaryweb/about.html";
    }

    /**
     * 跳转到岗位薪酬页面
     */
    @RequestMapping(value = "/salaryWeb/salaryIndexServices", method = RequestMethod.GET)
    public String salaryIndexServices() {
        return "/Salaryweb/services.html";
    }

    /**
     * 跳转到行业薪酬页面
     */
    @RequestMapping(value = "/salaryWeb/salaryIndexPortfolio3col", method = RequestMethod.GET)
    public String salaryIndexPortfolio3col() {
        return "/Salaryweb/portfolio3col.html";
    }

    /**
     * 跳转到薪酬查询页面
     */
    @RequestMapping(value = "/salaryWeb/salaryIndexBlog", method = RequestMethod.GET)
    public String salaryIndexBlog() {
        return "/Salaryweb/blog.html";
    }

    /**
     * 跳转到专项报告页面
     */
    @RequestMapping(value = "/salaryWeb/salaryIndexBlogSingle", method = RequestMethod.GET)
    public String salaryIndexBlogSingle() {
        return "/Salaryweb/blog-single.html";
    }


    /**
     * 跳转到注册新用户页面
     */
    @RequestMapping(value = "/salaryWeb/registerNewUserPage", method = RequestMethod.GET)
    public String registerNewUserPage() {
        return "/register.html";
    }

    /**
     * 注册新用户
     */
    @RequestMapping(value = "/salaryWeb/registerNewUser", method = RequestMethod.POST)
    public String registerNewUser() {
        String username = super.getPara("username").trim();
        String password = super.getPara("password").trim();
        return "/register.html";
    }


    /**
     * 点击登录执行的动作
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String loginVali() {

        String username = super.getPara("username").trim();
        String password = super.getPara("password").trim();

        //验证验证码是否正确
        if(ToolUtil.getKaptchaOnOff()){
            String kaptcha = super.getPara("kaptcha").trim();
            String code = (String) super.getSession().getAttribute(Constants.KAPTCHA_SESSION_KEY);
            if(ToolUtil.isEmpty(kaptcha) || !kaptcha.equals(code)){
                throw new InvalidKaptchaException();
            }
        }

        Subject currentUser = ShiroKit.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password.toCharArray());
        token.setRememberMe(true);

        currentUser.login(token);

        ShiroUser shiroUser = ShiroKit.getUser();
        super.getSession().setAttribute("shiroUser", shiroUser);
        super.getSession().setAttribute("username", shiroUser.getAccount());

        LogManager.me().executeLog(LogTaskFactory.loginLog(shiroUser.getId(), getIp()));

        ShiroKit.getSession().setAttribute("sessionFlag",true);

        return REDIRECT + "/";
    }

    /**
     * 用户注册
     */
    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public String register(HttpServletRequest request) {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String password2 = request.getParameter("password2");
        if(password.equals(password2)){
            User user = new User();
            user.setAccount(username);
            user.setPassword(password);
            return "login.html";
        }else {
            return "register.html";
        }
    }
    /**
     * 退出登录
     */
    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logOut() {
        LogManager.me().executeLog(LogTaskFactory.exitLog(ShiroKit.getUser().getId(), getIp()));
        ShiroKit.getSubject().logout();
        return REDIRECT + "/salaryIndex";
    }
}
