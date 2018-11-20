$(function () {
    // console.log(location.search);
    var categoryid = location.search.split("=")[1];
    var pageId = 1;
    var totalPage, text;
    //发送ajax请求，获取分类的名称
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getcategorybyid",
        data: {
            categoryid: categoryid
        },
        dataType: "json",
        success: function (res) {
            console.log(res);
            for (var i = 0; i < res.result.length; i++) {
                var html = '<li>\
                                <a href="javascript:;">' + res.result[i].category + '</a>\
                            </li>\
                            <li>></li>';
            }
            $(".crumbs ul").append(html);
        }
    });

    //生成分页
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getproductlist",
        data: {
            categoryid: categoryid
        },
        dataType: "json",
        success: function (res) {
            // console.log(res);
            totalPage = Math.ceil(res.totalCount / res.pagesize);
            // console.log(totalPage)
            var arr = [];
            for (var i = 1; i <= totalPage; i++) {
                if (i == 1) {
                    arr.push('<a href="javascript:;" class="col" index="' + i + '">' + i + '/' + totalPage + '</a>');
                    continue;
                }
                arr.push('<a href="javascript:;" index="' + i + '">' + i + '/' + totalPage + '</a>');
            }
            var html = arr.join("");
            $(".selectPage").html(html);
            text = $(".selectPage a").eq(0).text();
            $(".selectText").text(text);
            render(pageId);
            //点击选项按钮张开选项
            $("#selectPage").on("click", function () {
                $(".selectPage").toggleClass("toggle");
            });
            //给每个选项注册点击事件
            $(".selectPage a").on("click", function () {
                $(this).addClass("col").siblings().removeClass("col");
                text = $(this).text();
                $(".selectText").text(text);
                pageId = $(this).attr("index");
                render(pageId);
            })
        }
    });

    function render(pageId) {
        $("#selectPage").val(pageId);
        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getproductlist",
            data: {
                categoryid: categoryid,
                pageid: pageId
            },
            dataType: "json",
            success: function (res) {
                console.log(res);
                totalPage = res.totalCount / res.pagesize;
                var html = template('shoop', {
                    data: res.result
                });
                $('.liBox').html(html);
            }
        });
    }

    //点击下一页
    $(".next").on("click", function () {
        pageId++;
        // console.log(pageId);
        totalPage =  Math.ceil(totalPage)
        if (pageId <= totalPage) {
            text = $($(".selectPage a")[pageId - 1]).text();
        }
        $(".selectText").text(text);
        if (pageId > totalPage) {
            pageId = totalPage;
            return;
        }
        // console.log(pageId);
        render(pageId);
    })
    //点击下一页
    $(".prev").on("click", function () {
        pageId--;
        // console.log(pageId);
        if (pageId > 0) {
            text = $($(".selectPage a")[pageId - 1]).text();
            $(".selectText").text(text);
        }
        // console.log(pageId);
        if (pageId < 1) {
            pageId = 1;
            return;
        }
        // console.log(pageId);
        render(pageId);
    })

})