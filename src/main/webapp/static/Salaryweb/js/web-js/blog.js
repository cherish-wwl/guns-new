/**
 * Created by Cherish on 2017/7/17.
 */
$(document).ready(function () {
    $("#searchSalaryBtn").click(function(){
        console.log("开始查询。。。");
        var dom=$("#sidebar");

        var searchCondition={"area":dom.find("input[name='fname1']").val()};
        console.log("查询条件为：" +searchCondition.area);
    });
});
