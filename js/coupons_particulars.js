$(function(){
    var title=GetRequest();
    $("#yTitle").html(title.title+$("#yTitle").text());
    getParticularsList()
    
});
//详细信息
function getParticularsList(){
    $.get('http://193.112.55.79:9090/api/getcouponproduct?couponid=0',function(res){
            $("#particularsUl").html(template('tlId',res.result));
    });
}
//标签带参数跳转并在下一个页面接收
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
     if (url.indexOf("?") != -1) {
           var str = url.substr(1);
           strs = str.split("&");
           for (var i = 0; i < strs.length; i++) {
               theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
           }
       }
       return theRequest;
    }