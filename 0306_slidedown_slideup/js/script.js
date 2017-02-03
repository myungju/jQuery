window.onload=function(){
    $("#up").click(function(){
        $("div").slideUp(1000,function(){
            alert("지금 상태는 " + $(this).css("display")+"입니다.");
        });
    });
    $("#down").click(function(){
        $("div").slideDown(1000,function(){
            alert("지금 상태는 " + $(this).css("display")+"입니다.");
        });
    });
    
}




