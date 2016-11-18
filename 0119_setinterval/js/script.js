var count=1;
var path="images/photo";

function gallery_fn(){
    console.log(path+count+".jpg");
    if(count==5){
        clearInterval(timer);
        console.log("갤러리 마무리");
    }
    count++;
}

var timer=setInterval("gallery_fn()",1000);