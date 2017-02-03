window.onload=function(){
    $("button#prepend").click(function(){
        $("div#container").prepend($("div#container img:last"));
    });
    $("button#append").click(function(){
        $("div#container").append($("div#container img:first"));
    });
}



