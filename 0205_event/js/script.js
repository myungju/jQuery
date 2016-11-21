window.onload=function(){
    $("div").click(function(e){
        $(this).css({background:"#ff0"});
    });
    $("a").click(function(e){
        $(this).css({background:"#ff0"});
        e.stopPropagation();
    });
    
}

