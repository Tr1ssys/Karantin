$(function(){
	if(window.location.pathname.includes("/toDo/")){
		$("#mainPage").removeClass("active");
		$("#thirdPage").removeClass("active");
		$("#fourthPage").removeClass("active");
		$("#fifthPage").removeClass("active");
		$("#secondPage").addClass("active");
	} else if(window.location.pathname.includes("/failedTasks/")){
		$("#mainPage").removeClass("active");
		$("#thirdPage").removeClass("active");
		$("#fourthPage").addClass("active");
		$("#fifthPage").removeClass("active");
		$("#secondPage").removeClass("active");
	} else if(window.location.pathname.includes("/done/")){
		$("#mainPage").removeClass("active");
		$("#thirdPage").addClass("active");
		$("#fourthPage").removeClass("active");
		$("#fifthPage").removeClass("active");
		$("#secondPage").removeClass("active");
	} else if(window.location.pathname.includes("/archive/")){
		$("#mainPage").removeClass("active");
		$("#thirdPage").removeClass("active");
		$("#fourthPage").removeClass("active");
		$("#fifthPage").addClass("active");
		$("#secondPage").removeClass("active");
	}
	 else {
		$("#mainPage").addClass("active");
		$("#thirdPage").removeClass("active");
		$("#fourthPage").removeClass("active");
		$("#fifthPage").removeClass("active");
		$("#secondPage").removeClass("active");
	} 
	$(".dropApple").click(function(){
		$(".dropActiveApple").removeClass("dropActiveApple");
	$(this).addClass("dropActiveApple");
});
});