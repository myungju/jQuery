window.onload=function(){
    $("#show").click(function(){
        $("img").show(1000,displayStr);
    });
    $("#hide").click(function(){
        $("img").hide(1000,displayStr);
    });
}

function displayStr(){
    alert("지금 상태는 "+$("img").css("display")+"입니다.");
}



