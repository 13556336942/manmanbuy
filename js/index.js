$(function () {
    $.ajax({
        url: "http://193.112.55.79:9090/api/getindexmenu",
        type: "get",
        dataType: "json",
        success: function (res) {
            var html = template("navTp",res)
            $('.nav-main').html(html)
            $('.nav-main > li:nth-of-type(n+9)').hide()
            $('.nav-main').on('touchstart','#7',function(){
             $('.nav-main > li:nth-of-type(n+9)').slideToggle( );
            })

         
        }
    });
    ;
           
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getmoneyctrl",
       
        dataType: "json",
        success: function (res) {
           var html=template('productTp',res);
            $('.comtent').html(html)
        }
    });
    $('.scroll').on('click',function(){
        $("body, html").animate({scrollTop:0},1000);
    })
  
    

})