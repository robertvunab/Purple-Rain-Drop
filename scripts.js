$(document).ready(function(){
    rainMany();
});
setTimeout(function(){
	$("#credit").css("opacity","0.1");
},15000);
var width = $(window).width();
var height = $(window).height()+10;
var times = 0;

function enlarge(){
	if ($("#youtubeIFrame").css("display") === "none") { 
		$("#youtubeIFrame").css("display","block");
		$("#credit").css("opacity","1");
	}
	else {
		$("#youtubeIFrame").css("display","none");
		$("#credit").css("opacity","0.1");}
}

function rainMany(){
	// var showTitle = ("<div id='showTitle' >");
	// $('body').append(showTitle);
	// $("#showTitle").css("line-height", "500px");
	// $("#showTitle").html("RAIN DROP");
	var fadeOut = 1;
	var d = setInterval(function(){
		$("#showTitle").css("opacity", fadeOut);
		fadeOut *= 0.975;
		if (fadeOut < 0.01) {
			clearInterval(d);
			$("#showTitle").remove();
		}
	}, 10);
	setTimeout(function(){
		var j = setInterval(function(){
			rain();
			// if (times == 10) clearInterval(j); //toggle this to stop the rain early
		}, 25);
	},3000);
}

function rain(){
	if (times > 10000){
		time = 0;
	}
	times++;
	var theId = "drop"+times;
	var element = ("<div class='drop' class='fixed' id='"+theId+"' style='top: -200px;'>");
	$('body').append(element);
	var spread = 100000;
	var x = Math.round(Math.random()*spread);
	x = (x/spread)*width;
	var y = Math.random()*100 - 100;
	var size = Math.round(Math.random()*20);
	$("#"+theId+"").css("left",x);
	
	var change = 6;
	function doIt(a,b,c){
		$("#"+theId+"").css("width",a);
		$("#"+theId+"").css("height",b);
		var c = setInterval(function(){
			$("#"+theId+"").css("top",y);
			y+=change;
			if (y > height) {
				clearInterval(c);
				$("#"+theId+"").remove();
			}
		},c);
	}

	switch (size){
		case 0: case 1: case 2: case 3: case 4: case 5: case 6: 
			doIt("1px","12.5px",1);
		break;
		case 7: case 8: case 9: case 10: case 11:
			doIt("3px","15px",3);
		break;
		case 12: case 13: case 14: case 15: 
			doIt("6px","20px",5);
		break;
		case 16: case 17:
			doIt("10px","25px",8);
		break;
		case 18: case 19:
			doIt("15px","30px",11);
		break;
		case 20:
		default:
			doIt("23px","40px",15);
		break;
	}
	// console.log("END");
}


