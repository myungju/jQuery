$(function(){
    $("button").click(function(){
        var name_var=$(this).attr("id");
        $("div").text("jQuery Event:"+name_var);
    });
});