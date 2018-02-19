// Create your global variables below:
var time;
var name;
var color;
var rtime;
var pill;
var tt;
function passwordreset(){
	alert("An email has been sent to you on your registered email id to retireve password.");
}
function save(){
	name = document.getElementById('med').value;

	color = document.querySelector('input[name="c"]:checked').value;

	pill = document.querySelector('input[name="p"]:checked').value;

	time = document.getElementById('t').value;

	
	window.location.replace("Home.html");

	if (time>=4 && time <12) {
		tt = "mor";
		/*
		if (pill=="p1"){
			document.getElementById("mor").innerHTML= "<img src= 'images/pill1.png'>";
		}
		else if (pill == "p2"){
			document.getElementById("m").innerHTML= "<img src= 'images/pill2.png'>";
		}
		else if (pill == "p3"){
			document.getElementById("m").innerHTML= "<img src= 'images/pill3.png'>";
		}
		else if (pill == "p4"){
			document.getElementById("m").innerHTML= "<img src= 'images/pill4.png'>";
		}
		*/
	
	}
	else if (12<=time<18){

	}
	else if (18<=time<22){

	}
	else if (22<=time || time<4){

	}

	rtime = document.getElementById('r').value;

	alert("Pill Added");
	document.getElementById(tt).innerHTML = name;


}