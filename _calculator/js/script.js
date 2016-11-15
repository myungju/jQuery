window.onload=function(){
    var num=0;

    $("#plus").click(function(){
        num++;
        $("body").append("<br>");
        $("body").append("num : " + num);
    });
    
    $("#minus").click(function(){
        num--;
        $("body").append("<br>");
        $("body").append("num : " + num);
    });
}