/**
 * Created by zhangruru on 2018/4/26.
 */
$(function(){
    /*基本信息、工作信息、房产信息、紧急联系人切换*/
    var check_tab=$(".check_tab li");
    check_tab.click(function(){
        var index=$(this).index();
        check_tab.eq(index).addClass("active").siblings().removeClass("active");
        $(".check_tabCont").eq(index).show().siblings().hide();
    });
    /*---------鼠标滑过表格信息显示-------*/
    $(".check_dl").hover(function(){
        $(this).find("div").toggle();
    });
    /*-----------点击图片显示-----------*/
    var check_pic=$(".check_slide li");
    check_pic.click(function(){
        var index=$(this).index();
        $("#img").attr("src",check_pic.eq(index).children("img").attr("src"));
    });
    /*-------------图片放大------------*/
    $(".check_scalePic").click(function(){
        $(".check_img").addClass("check_img_scale").height($(".check_right").height()-56);
    });
    $(".check_img").click(function () {
        $(this).removeClass("check_img_scale");
    });
    /*-----------左侧隐藏，右侧平铺-----*/
    $(".scale").click(function(){
        $(".check_left").toggleClass("check_left_hide");
        $(".check_right").toggleClass("check_right_show");
        $(this).attr("src")=="img/icon01.png"?$(this).attr("src","img/icon4.png"):$(this).attr("src","img/icon01.png");
    });
    /*-------暂置左侧的高度等于右侧的高度------*/
    $(".check_tabCont").height($(".check_left").height()-155);
    $(".check_left,.check_right").height($(window).height()-45);
    /*-------------模拟下拉框------------*/
    $(".check_more").click(function () {
        $(this).siblings("ul").show().children("li").click(function () {
            $(".check_more").text($(this).text());
            $(this).parent("ul").hide();
        });
    });
    /*-------------滚动条设置------------*/
    $(".check_tabCont,.check_pic").niceScroll({
        cursorwidth: "6px"
    });
})