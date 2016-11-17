window.onload=function(){
    
    var num1=0;
    var obj={num2:10, num3:20, fn:function(){alert("num:"+num1);}};
    $("#num2").click(function(){
        $("body").append("<br>");
        $("body").append("obj.num2:"+obj.num2);
    });
    $("#num3").click(function(){
        $("body").append("<br>");
        $("body").append("obj.num3:"+obj.num3);
    });
    $("#fn").click(function(){
        obj.fn();
    });
}