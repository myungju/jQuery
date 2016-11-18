var x_var;
var y_var;

function moving_fn(){
    x_var=Math.random()*500+20;
    Y_var=Math.random()*300+60;
    $("#box").css({left:x_var+"px", top:y_var+"px"});
}

window.onload=function(){
    $("#setTimeout").click(function(e){
        setTimeout("moving_fn()",2000);
    });
}