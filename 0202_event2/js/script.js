$(function(){
	var link_array=new Array("http://www.naver.com", "http://www.daum.net","http://www.google.com");
    $("button").click(function(){
		var num=$(this).index();
		var url=link_array[num];
		window.location.href=link_array[num];
	});
});