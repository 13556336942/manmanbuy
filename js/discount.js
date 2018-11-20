$(function(){
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getinlanddiscount",
        dataType: "json",
        success: function (response) {
            console.log(response)
            $('.liBox').html(template('shoopTwo',{data:response.result}))
        }
    });
})