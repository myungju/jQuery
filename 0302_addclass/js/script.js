window.onload=function(){
    $("p").text("이 p는 흰색 바탕입니다.");
    $("div").addClass(
        function(i, className){
            className+="green";
            return className;
        }
    )
   
}



