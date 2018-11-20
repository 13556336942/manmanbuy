$(function(){
    getCouponsList()
});
//优惠券列表
function getCouponsList(){
    $.get('http://193.112.55.79:9090/api/getcoupon',function(res){
        $("#couponsUl").html(template('tlId',res.result));
    });
}