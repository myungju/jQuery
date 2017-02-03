window.onload=function(){
    $("body").append("<p></p>");
    
    $("button#fadeOut").click(function(){
        $("img").fadeOut(1000,function(){
            $("p").text("지금 display 값은 "+$(this).css("display")+"입니다.");
        }); 
    });
    $("button#fadeIn").click(function(){
        $("img").fadeIn(1000,function(){
            $("p").text("지금 display 값은 "+$(this).css("display")+"입니다.");
        }); 
    });
}




