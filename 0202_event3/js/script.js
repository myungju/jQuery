$(function(){
	var link_array=new Array("http://www.naver.com", "http://www.daum.net","http://www.google.com");
    $("button").click(function(){
		var url=$(this).attr("title");
		window.location.href=url;
	});
});