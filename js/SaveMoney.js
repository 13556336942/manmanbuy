$(function(){
    getData();
    function getData(){
        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getmoneyctrl",
            dataType: "json",
            success: function (response) {
                console.log(response.result);
                var html = template('shoop',{data:response.result});
                $('.liBox').html(html);
            }
        });
    }
    //回到顶部
    $('.backTop').on('click',function(){
        $(window).scrollTop(0);
    })

    $('.aLLA').on('click',function(){
        getData();
    })
})