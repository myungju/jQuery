$(function(){
    for(var i=1;i<=4;i++){
        $("#button"+i).click(function(){
            var name_var=$(this).attr("id");
            $("div").text("jQuery Event:"+name_var); 
        });
    }
});