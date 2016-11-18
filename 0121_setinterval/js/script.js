var x_var=10;

function moving_fn(){
    x_var = x_var+10;
        
    if(x_var>500){
        clearInterval(timer);
    }
    $("#box").css({left:x_var+"px"});
}

var timer=setInterval("moving_fn()",100);








