window.onload=function(){
    $("#append").click(function(){
        $("div#container").append(fetchImg());
    });
}

function fetchImg(){
    var imgPath = "<img src='http://myungju66.dothome.co.kr/img/profile1.jpg'>";
    return imgPath;
}


