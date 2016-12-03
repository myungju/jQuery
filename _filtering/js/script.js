window.onload=function(){
    //$("div#main p").first().css({"background-color":"#666",color:"#fff"});
    //$("div#main p").last().css({"background-color":"#666",color:"#fff"});
    //$("div#main p").eq(1).css({"background-color":"#666",color:"#fff"});
    //$("div#main div").filter(".middle").css({"background-color":"#666",color:"#fff"});
    //$("div#main div").not(".middle").css({"background-color":"#666",color:"#fff"});
    $("div#main div").has("p").css({"background-color":"#666",color:"#fff"});
}


