//My Scripts//
//$("#blueViolet").mouseenter(function(){
	//$("#blueViolet").css("fill","black");
//});
//$("#blueViolet").mouseleave(function(){
	//$("#blueViolet").css("fill","blueViolet");
//});
var selectedColor;
$("resetBtn").click(function(){
	location.reload()
});

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
$("#orange").click(function(){
	$("#text").css("color","orange");
	$("#text").html("orange");
	selectedColor = "o";
});
$("#yellow").click(function(){
	$("#text").css("color","yellow");
	$("#text").html("yellow");
	selectedColor = "y";
});
$("#violet").click(function(){
	$("#text").css("color","#662D91");
	$("#text").html("violet");
	selectedColor = "v";
});
$("#red").click(function(){
	$("#text").css("color","red");
	$("#text").html("red");
	selectedColor = "r";
});
$("#green").click(function(){
	$("#text").css("color","green");
	$("#text").html("green");
	selectedColor = "g";
});
$("#redOrange").click(function(){
	$("#text").css("color","#F15A24");
	$("#text").html("red-orange");
	selectedColor = "ro";
});
$("#blueGreen").click(function(){
	$("#text").css("color","#00A99D");
	$("#text").html("blue-green");
	selectedColor = "bg";
});
$("#yellowOrange").click(function(){
	$("#text").css("color","#FBB03B");
	$("#text").html("yellow-orange");
	selectedColor = "yo";
});
$("#blueViolet").click(function(){
	$("#text").css("color","#1B1464");
	$("#text").html("blue-violet");
	selectedColor = "bv";
});
$("#yellowGreen").click(function(){
	$("#text").css("color","#8CC63F");
	$("#text").html("yellow-green");
	selectedColor = "yg";
});
$("#redViolet").click(function(){
	$("#text").css("color","#9E005D");
	$("#text").html("red-violet");
	selectedColor = "rv";
});

$("#compbtn").click(function(){
	if(selectedColor == "b"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blue").css("opacity","1");
		$("#orange").css("opacity","1");
	}
	else if (selectedColor == "o"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blue").css("opacity","1");
		$("#orange").css("opacity","1");
	}	
});
$("#compbtn").click(function(){
	if(selectedColor == "y"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellow").css("opacity","1");
		$("#violet").css("opacity","1");
	}
	else if (selectedColor == "v"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellow").css("opacity","1");
		$("#violet").css("opacity","1");
	}	
});
$("#compbtn").click(function(){
	if(selectedColor == "r"){
		$("#wheelSVG path").css("opacity",".1");
		$("#red").css("opacity","1");
		$("#green").css("opacity","1");
	}
	else if (selectedColor == "g"){
		$("#wheelSVG path").css("opacity",".1");
		$("#red").css("opacity","1");
		$("#green").css("opacity","1");
	}	
});
$("#compbtn").click(function(){
	if(selectedColor == "ro"){
		$("#wheelSVG path").css("opacity",".1");
		$("#redOrange").css("opacity","1");
		$("#blueGreen").css("opacity","1");
	}
	else if (selectedColor == "bg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#redOrange").css("opacity","1");
		$("#blueGreen").css("opacity","1");
	}	
});
$("#compbtn").click(function(){
	if(selectedColor == "yo"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowOrange").css("opacity","1");
		$("#blueViolet").css("opacity","1");
	}
	else if (selectedColor == "bv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowOrange").css("opacity","1");
		$("#blueViolet").css("opacity","1");
	}	
});
$("#compbtn").click(function(){
	if(selectedColor == "yg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#redViolet").css("opacity","1");
	}
	else if (selectedColor == "rv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#redViolet").css("opacity","1");
	}	
});
$("#tribtn").click(function(){
	if(selectedColor == "b"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blue").css("opacity","1");
		$("#yellow").css("opacity","1");
		$("#red").css("opacity","1");
	}
	else if (selectedColor == "y"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blue").css("opacity","1");
		$("#yellow").css("opacity","1");
		$("#red").css("opacity","1");
	}	
	else if (selectedColor == "r"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blue").css("opacity","1");
		$("#yellow").css("opacity","1");
		$("#red").css("opacity","1");
	}	
});
$("#tribtn").click(function(){
	if(selectedColor == "bv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#yellowGreen").css("opacity","1");
		$("#redOrange").css("opacity","1");
	}
	else if (selectedColor == "yg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#yellowGreen").css("opacity","1");
		$("#redOrange").css("opacity","1");
	}	
	else if (selectedColor == "ro"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#yellowGreen").css("opacity","1");
		$("#redOrange").css("opacity","1");
	}	
});
$("#tribtn").click(function(){
	if(selectedColor == "v"){
		$("#wheelSVG path").css("opacity",".1");
		$("#violet").css("opacity","1");
		$("#green").css("opacity","1");
		$("#orange").css("opacity","1");
	}
	else if (selectedColor == "g"){
		$("#wheelSVG path").css("opacity",".1");
		$("#violet").css("opacity","1");
		$("#green").css("opacity","1");
		$("#orange").css("opacity","1");
	}	
	else if (selectedColor == "o"){
		$("#wheelSVG path").css("opacity",".1");
		$("#violet").css("opacity","1");
		$("#green").css("opacity","1");
		$("#orange").css("opacity","1");
	}	
});
$("#tribtn").click(function(){
	if(selectedColor == "rv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#redViolet").css("opacity","1");
		$("#blueGreen").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
	}
	else if (selectedColor == "bg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#redViolet").css("opacity","1");
		$("#blueGreen").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
	}	
	else if (selectedColor == "yo"){
		$("#wheelSVG path").css("opacity",".1");
		$("#redViolet").css("opacity","1");
		$("#blueGreen").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "rv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#redViolet").css("opacity","1");
		$("#red").css("opacity","1");
		$("#redOrange").css("opacity","1");
	}
	else if (selectedColor == "r"){
		$("#wheelSVG path").css("opacity",".1");
		$("#redViolet").css("opacity","1");
		$("#red").css("opacity","1");
		$("#redOrange").css("opacity","1");
	}	
	else if (selectedColor == "ro"){
		$("#wheelSVG path").css("opacity",".1");
		$("#redViolet").css("opacity","1");
		$("#red").css("opacity","1");
		$("#redOrange").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "r"){
		$("#wheelSVG path").css("opacity",".1");
		$("#orange").css("opacity","1");
		$("#red").css("opacity","1");
		$("#redOrange").css("opacity","1");
	}
	else if (selectedColor == "o"){
		$("#wheelSVG path").css("opacity",".1");
		$("#orange").css("opacity","1");
		$("#red").css("opacity","1");
		$("#redOrange").css("opacity","1");
	}	
	else if (selectedColor == "ro"){
		$("#wheelSVG path").css("opacity",".1");
		$("#orange").css("opacity","1");
		$("#red").css("opacity","1");
		$("#redOrange").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "ro"){
		$("#wheelSVG path").css("opacity",".1");
		$("#orange").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
		$("#redOrange").css("opacity","1");
	}
	else if (selectedColor == "o"){
		$("#wheelSVG path").css("opacity",".1");
		$("#orange").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
		$("#redOrange").css("opacity","1");
	}	
	else if (selectedColor == "yo"){
		$("#wheelSVG path").css("opacity",".1");
		$("#orange").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
		$("#redOrange").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "o"){
		$("#wheelSVG path").css("opacity",".1");
		$("#orange").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
		$("#yellow").css("opacity","1");
	}
	else if (selectedColor == "y"){
		$("#wheelSVG path").css("opacity",".1");
		$("#orange").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
		$("#yellow").css("opacity","1");
	}	
	else if (selectedColor == "yo"){
		$("#wheelSVG path").css("opacity",".1");
		$("#orange").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
		$("#yellow").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "yo"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
		$("#yellow").css("opacity","1");
	}
	else if (selectedColor == "y"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
		$("#yellow").css("opacity","1");
	}	
	else if (selectedColor == "yg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#yellowOrange").css("opacity","1");
		$("#yellow").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "y"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#green").css("opacity","1");
		$("#yellow").css("opacity","1");
	}
	else if (selectedColor == "g"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#green").css("opacity","1");
		$("#yellow").css("opacity","1");
	}	
	else if (selectedColor == "yg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#green").css("opacity","1");
		$("#yellow").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "yg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#green").css("opacity","1");
		$("#blueGreen").css("opacity","1");
	}
	else if (selectedColor == "g"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#green").css("opacity","1");
		$("#blueGreen").css("opacity","1");
	}	
	else if (selectedColor == "bg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#yellowGreen").css("opacity","1");
		$("#green").css("opacity","1");
		$("#blueGreen").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "g"){
		$("#wheelSVG path").css("opacity",".1");
		$("#green").css("opacity","1");
		$("#blueGreen").css("opacity","1");
		$("#blue").css("opacity","1");
	}
	else if (selectedColor == "b"){
		$("#wheelSVG path").css("opacity",".1");
		$("#green").css("opacity","1");
		$("#blueGreen").css("opacity","1");
		$("#blue").css("opacity","1");
	}	
	else if (selectedColor == "bg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#green").css("opacity","1");
		$("#blueGreen").css("opacity","1");
		$("#blue").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "bg"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#blueGreen").css("opacity","1");
		$("#blue").css("opacity","1");
	}
	else if (selectedColor == "b"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#blueGreen").css("opacity","1");
		$("#blue").css("opacity","1");
	}	
	else if (selectedColor == "bv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#blueGreen").css("opacity","1");
		$("#blue").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "b"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#violet").css("opacity","1");
		$("#blue").css("opacity","1");
	}
	else if (selectedColor == "bv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#violet").css("opacity","1");
		$("#blue").css("opacity","1");
	}	
	else if (selectedColor == "v"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#violet").css("opacity","1");
		$("#blue").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "bv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#violet").css("opacity","1");
		$("#redViolet").css("opacity","1");
	}
	else if (selectedColor == "v"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#violet").css("opacity","1");
		$("#redViolet").css("opacity","1");
	}	
	else if (selectedColor == "rv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#blueViolet").css("opacity","1");
		$("#violet").css("opacity","1");
		$("#redViolet").css("opacity","1");;
	}	
});
$("#anabtn").click(function(){
	if(selectedColor == "v"){
		$("#wheelSVG path").css("opacity",".1");
		$("#red").css("opacity","1");
		$("#violet").css("opacity","1");
		$("#redViolet").css("opacity","1");
	}
	else if (selectedColor == "rv"){
		$("#wheelSVG path").css("opacity",".1");
		$("#red").css("opacity","1");
		$("#violet").css("opacity","1");
		$("#redViolet").css("opacity","1");
	}	
	else if (selectedColor == "r"){
		$("#wheelSVG path").css("opacity",".1");
		$("#red").css("opacity","1");
		$("#violet").css("opacity","1");
		$("#redViolet").css("opacity","1");;
	}	
});
//$("#compbtn").click(function(){
	//if(selectedColor == "blue"){

	//}
//});