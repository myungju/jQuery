window.onload=function(){
    $("img").eq(0).addClass("type1");
    $("img").eq(0).removeClass("type1");
    $("img").click(function(){
        var n=Math.ceil(Math.random()*5);
        var existClass=$(this).attr("class");
        if(!existClass){
            console.log("정해진 클래스가 없습니다.");
        }
        else{
            $(this).removeClass(existClass);
        }
        $(this).addClass("type"+n);
    });
   
}



