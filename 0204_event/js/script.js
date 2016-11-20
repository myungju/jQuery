$(function(){
	$("button").click(function(){
		var name_var = $(this).attr("id");
		switch(name_var){
			case "button1":
			sum_fn(10);
			$("div").text("1에서 10까지 더한 합 : "+sum_fn(10));
			break;
			case "button2":
			sum_fn(50);
			$("div").text("1에서 50까지 더한 합 : "+sum_fn(50));
			break;
			case "button3":
			sum_fn(100);
			$("div").text("1에서 10까지 더한 합 : "+sum_fn(100));
			break;
		}
	});
	
	function sum_fn(n){
		var count=0;
		for(var i=0;i<n;i++){
			count+=i;
		}
		return count;
	}
});