/**
 * Created by Cherish on 2017/7/19.
 */
$(document).ready(function () {

    var   chooseTradeId;
    //$.ajax({
    //    url:"/salaryWeb/trade",
    //    type:"post",
    //    data:{
    //
    //    }, success: function(data){
    //        console.log(data);
        var data=[{id:1,name:"带杀啥大事你觉"},{id:1,name:"带杀啥大事你觉"},
            {id:4,name:"sad的都擦掉v啊"},{id:3,name:"打发打发打发"},{id:2,name:"银行烟台烟台"}];
             $("#parenttrades").find("span").not(".all").remove();

            for(var i=0;i<data.length;i++)
            {
                var text;
                var tradeId;
                text=data[i].name;
                tradeId=data[i].id;
                var item="<span  class='font02 parentTradeItem' tradeId="+tradeId+">"+text+"</span>";
                $("#parenttrades").append(item);
            }
    //    }
    //})

//    点击全部：显示全部行业
    $("#parenttrades .all").click(function(){
            $("#parenttrades").find(".backgroup-color-red").removeClass("backgroup-color-red");
            $(this).addClass("backgroup-color-red");
            chooseTradeId="all";
            //$.ajax({
            //    url:"/salaryWeb/secondtrade",
            //    type:"post",
            //    data:{
            //        tradId:"all",
            //          page:1,
            //         count:16,
            //    }, success: function(data){
            //        console.log(data);

            var data=[{id:1,name:"带杀啥大事你觉"},{id:5,name:"带杀啥大事你觉"},
                {id:4,name:"sad的都擦掉v啊2"},{id:23,name:"打发打发打发3453"},{id:432,name:"银行烟台烟台3"},
                {id:14,name:"sad的都擦掉v啊3"},{id:13,name:"打发打发打发453"},{id:542,name:"银行烟台烟台4"},
                {id:24,name:"sad的都擦掉v啊7"},{id:33,name:"打发打发打发34"},{id:552,name:"银行烟台烟台45"},
                {id:34,name:"sad的都擦掉v啊2"},{id:43,name:"打发打发打发4534"},{id:62,name:"银行烟台烟台345"}];
            $("#showTrades").empty();

            for(var i=0;i<data.length;i++)
            {
                var text;
                var tradeId;
                text=data[i].name;
                tradeId=data[i].id;
                var item="	<div class='col-xs-3'>" +
                    "<span class='font03' tradeId="+tradeId+" style='background-color:"+getRandomColor()+"'>"+text+"</span></div>";

                $("#showTrades").append(item);


            }
            loadPagination(10);
            //    }
            //})
            //
        });
    $("#parenttrades .all").trigger("click");
//    点击行业：显示子行业
    $("#parenttrades").on("click",".parentTradeItem", function () {
            console.log($(this));

            $("#parenttrades").find(".backgroup-color-red").removeClass("backgroup-color-red");
            $(this).addClass("backgroup-color-red");
            var PtradeId=$(this).attr("tradeid");
            chooseTradeId="PtradeId";
            //$.ajax({
            //    url:"/salaryWeb/secondtrade",
            //    type:"post",
            //    data:{
            //        tradId:PtradeId,
            //          page:1,
            //         count:16
            //    }, success: function(data){
            //        console.log(data);
            var data=[{id:1,name:"带杀啥大事你觉"},{id:5,name:"带杀啥大事你觉"},
                {id:4,name:"sad的都擦掉v啊2"},{id:23,name:"打发打发打发3453"},{id:432,name:"银行烟台烟台3"},
                {id:14,name:"sad的都擦掉v啊3"},{id:13,name:"打发打发打发453"},{id:542,name:"银行烟台烟台4"}];
            $("#showTrades").empty();

            for(var i=0;i<data.length;i++)
            {
                var text;
                var tradeId;
                text=data[i].name;
                tradeId=data[i].id;
                var item="	<div class='col-xs-3'>" +
                    "<span class='font03 item' tradeId="+tradeId+" style='background-color:"+getRandomColor()+"'>"+text+"</span></div>";


                $("#showTrades").append(item);


            }
            loadPagination(5);
            //    }
            //})
        });
//    翻页
    $("#pagination").on("click","li",function(){
            var that=this;
            var page;
            var active=$("#pagination").find("li.active");
            if(active.length<1){
                console.log("没有页数");
                return;
            }
            page=$(active).attr("pageNum");
            if($(this).attr("pageNum")=="pervious"){
                //    向前翻页

                if(page>1){
                    console.log(page-1);
                    loadingDateForPagination(page-1);
                    $(active).prev().addClass("active");
                    $(active).removeClass("active")
                }

            }else if($(this).attr("pageNum")=="next"){
                //    向后翻页
                console.log($(active).next());
                if($(active).next().length>1){
                    console.log(page+1);
                    loadingDateForPagination(page+1);
                    $(active).next().addClass("active");
                    $(active).removeClass("active")
                }
            }else{
                //    调到指定页数

                loadingDateForPagination(page);
                $(this).addClass("active");
                $(active).removeClass("active")
            }

        });
//    随机颜色
    function getRandomColor(){

        return  '#' +
            (function(color){
                return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
                && (color.length == 6) ?  color : arguments.callee(color);
            })('');
    }

    function  loadPagination(data){
        $("#pagination").empty();
        var pervious="<li class='pervious' pageNum='pervious'><a href='#'>&laquo;</a></li>";
        $("#pagination").append(pervious);

        if(data>1){
            var fristItem="	<li class='active' pageNum=1 ><a href='#'>1</a></li>";
            $("#pagination").append(fristItem);
        }


        for(var count=2;count<=data;count++){
            var item="	<li pageNum="+count+"><a href='#'>"+count+"</a></li>";
            $("#pagination").append(item);
        }
        var next="<li class='next' pageNum='next'><a href='#'>&raquo;</a></li>";
        $("#pagination").append(next);
    }

    function loadingDateForPagination(page){
        //$.ajax({
        //    url:"/salaryWeb/secondtrade",
        //    type:"post",
        //    data:{
        //        tradId:chooseTradeId,
        //          page:page,
        //         count:16
        //    }, success: function(data) {
                console.log(data);
                var data = [{id: 1, name: "带杀啥大事你觉wewd"}, {id: 5, name: "带杀啥大事你觉"},
                    {id: 4, name: "sad的都擦掉v啊2sffda"}, {id: 23, name: "打发打发打发3453"}, {id: 432, name: "银行烟台烟台3"},
                    {id: 14, name: "sad的都擦掉v啊3"}];
                $("#showTrades").empty();
                for (var i = 0; i < data.length; i++) {
                    var text;
                    var tradeId;
                    text = data[i].name;
                    tradeId = data[i].id;
                    var item = "<div class='col-xs-3'>" +
                        "<span class='font03 item' tradeId=" + tradeId + " style='background-color:" + getRandomColor() + "'>" + text + "</span></div>";
                    $("#showTrades").append(item);
                }
        //    }
        //})
    }

});