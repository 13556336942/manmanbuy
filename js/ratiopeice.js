$(function () {
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getcategorytitle",
        // data: "data",
        dataType: "json",
        success: function (res) {
            console.log(res)
            var html = template("itemsTmp", res);
            $(".ratiopriceItems").html(html);

            //获取到所有a标签，注册鼠标点击事件
            var titleId
            var flag;
            $(".ratiopriceItems .button").on("click", function () {
                //获取点击当前按钮的titleId
                titleId = $(this).attr("titleId");
                $($(".panel-body")[titleId]).toggleClass("toggle");
                flag = $(this).attr("status");
                if(flag == "istrue") {
                    $(this).attr("status","isfalse");
                    $.ajax({
                        type: "get",
                        url: "http://193.112.55.79:9090/api/getcategory",
                        data: {
                            titleid: titleId
                        },
                        dataType: "json",
                        success: function (res) {
                            console.log(res);
                            //根据当前的titleid显示对应的内容
                            var itemHTML = template("itemTmp", {
                                list: res.result
                            });
                            $($(".panel-body > ul")[titleId]).html(itemHTML);
    
                        }
                    });
                }
                
                if ($($(".panel-body")[titleId]).hasClass("toggle")) {
                    $($(".panel-body")[titleId]).css("display", "none")
                } else {
                    $($(".panel-body")[titleId]).css("display", "block")
                    $($(".panel-body")[titleId]).parent().parent().siblings().find(".panel-body").css("display", "none");
                }
            });
        }
    });
});