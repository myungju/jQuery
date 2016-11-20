$(function(){
	var x_var=0;
	var y_var=0;
	
	$("#left").click(function(){
		$("#box").css({left:"-=10px"});
	});
	$("#right").click(function(){
		$("#box").css({left:"+=10px"});
	});
	$("#top").click(function(){
		$("#box").css({top:"-=10px"});
	});
	$("#bottom").click(function(){
		$("#box").css({top:"+=10px"});
	});
});