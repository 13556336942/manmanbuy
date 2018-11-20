$(function(){
    var id = location.search.substr(4);
    console.log(id)
   $.ajax({
       type: "get",
       url: "http://193.112.55.79:9090/api/getdiscountproduct",
       data: {
        productid :id
       },
       dataType: "json",
       success: function (response) {
           console.log(response);
            $('.commodity_details').html(template('commodity_id',{data:response.result}))
       }
   });
}) 