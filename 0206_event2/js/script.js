window.onload=function(){
    $("#show").click(function(){
        if($("div").css("display")=="none"){
            $("div").show(1000,display_fn);    
        }
        
    });
    $("#hide").click(function(){
        if($("div").css("display")=="block"){
            $("div").hide(1000,display_fn);
        }
        
    });
}

function display_fn(){
    alert("지금상태는 " + $("div").css("display")+"입니다")
}

