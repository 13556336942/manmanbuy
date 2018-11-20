window.onload=function(){
    getBcjTitleList();
    getCommodityList();
    $("#bcj_navId").on("click","li",function(){
        $("#bcj_navId li").removeClass('dianJi');
        $(this).addClass("dianJi");
    })
    $(".footer_nav ul li:nth-of-type(3)>a").click(function(){
        back();
    });
    $("#backIco").click(function(){
        back();
    });
}
//标题列表数据
function getBcjTitleList(){
    // $.get('http://193.112.55.79:9090/api/getbaicaijiatitle',function(result){
    //     var arr=Array();
    //     $.each(result.result,function(i,e){
    //         arr.push("<li><a href='javascript:;'>"+e.title+"</a></li>");
    //     });
    //     var str=arr.join("");
    //     $("#bcj_navId").html(str);
    // },'json');
    $.get('http://193.112.55.79:9090/api/getbaicaijiatitle',function(result){
        $("#bcj_navId").html(template('bcj_navTId',result.result));
    },'json');
}
//商品列表数据
function getCommodityList(){
    var id=0;
    $.get('http://193.112.55.79:9090/api/getbaicaijiaproduct?titleid='+id,function(result){
        $("#commodityId").html(template('bcj_commodityTId',result.result));
    },'json');
}
//回到顶部
function back(){
    $(".footer_nav ul li:nth-of-type(3)>a")
    //console.log($(".footer_nav ul li:nth-of-type(3)>a").text());
    // 控制滚动出去的距离为0
    //$(window).scrollTop(0);
    $("body,html").stop().animate({
        "scrollTop":0
    },1000)
}