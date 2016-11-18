var x_var = 10;
var y_var = 60;
var timer;
var flag=false;

function moving_fn(){
    x_var = Math.random()*500+20;
    y_var = Math.random()*300+60;
    $("#box").css({left:x_var+"px", top:y_var+"px"});
}

window.onload=function(){
    $("#setInterval").click(function(e){
        if(flag==false){
            timer=setInterval("moving_fn()",1000);
            flag=true;
        }
    });

    $("#clearInterval").click(function(e){
        flag=false;
        clearInterval(timer);
    });      
}

