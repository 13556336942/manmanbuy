$(function(){
    // console.log(location.search);
    var categoryid = location.search.split("=")[1];
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getinlanddiscount",
        data: {
            categoryid:categoryid
        },
        dataType: "json",
        success: function (res) {
            console.log(res);
            var html = template('shoop',{data:res.result});
            $('.liBox').html(html);
            console.log(html)
        }
    });
})