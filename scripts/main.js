//My Scripts//
//$("#blueViolet").mouseenter(function(){
	//$("#blueViolet").css("fill","black");
//});
//$("#blueViolet").mouseleave(function(){
	//$("#blueViolet").css("fill","blueViolet");
//});
var selectedColor;

$("#pribtn").click(function(){
	$("#wheelSVG path").css("opacity",".1");
	$("#blue").css("opacity","1");
	$("#yellow").css("opacity","1");
	$("#red").css("opacity","1");
});

$("#secbtn").click(function(){
	$("#wheelSVG path").css("opacity",".1");
	$("#green").css("opacity","1");
	$("#violet").css("opacity","1");
	$("#orange").css("opacity","1");
});

$("#terbtn").click(function(){
	$("#wheelSVG path").css("opacity",".1");
	$("#blueViolet").css("opacity","1");
	$("#yellowOrange").css("opacity","1");
	$("#redViolet").css("opacity","1");
	$("#blueGreen").css("opacity","1");
	$("#yellowGreen").css("opacity","1");
	$("#redOrange").css("opacity","1");
});

$("#blue").click(function(){
	$("#text").css("color","blue");
	$("#text").html("blue");
	selectedColor = "b";
});

$("#compbtn").click(function(){
	if(selectedColor == "b"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blue").css("opacity","1");
		$("#orange").css("opacity","1");
		
	}

});


//$("#compbtn").click(function(){
	//if(selectedColor == "blue"){

	//}
//});