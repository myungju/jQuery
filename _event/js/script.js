window.onload=function(){
    $("#event").click(
        function(){
            $("div").text("jQuery Event : click");
        }
    );
    $("#event").hover(
        function(){
            $("div").text("jQuery Event : mouseenter");
        },
        function(){
            $("div").text("jQuery Event : mouserleave");
        }
    );
}