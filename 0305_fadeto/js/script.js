window.onload=function(){
    $("body").append("<p></p>");
    
    $("button").click(function(){
        var opacity=$(this).attr("title");
        $("img").fadeTo("slow",opacity,function(){
            $("p").append("display:"+$(this).css("display")+"<br>");
            $("p").append("opacity:"+$(this).css("opacity")+"<br>");
            $("p").append("<br>");
        });
    });
}




