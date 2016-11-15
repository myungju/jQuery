window.onload=function(){

    $("#fn3").click(
        function(e){
            console.log("세번쨰 함수");
        }
    );

    $("#fn4").click(call_fn4);

}

function call_fn1(){
    console.log("첫번째 함수");
}

function call_fn2(str){
    console.log(str);
}

function call_fn4(){
    console.log("네번째 함수");
}