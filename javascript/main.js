var check=0;
var pk = [0, 0];
var p1 = [0, 2, 0];
var p2 = [0, 0, 0];
var time=500;
var px = [1, 2];
var py = [7, 2];
var oh=0;

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var _img1 = new Image();
_img1.src = "source/korea.png";
var _img2 = new Image();
_img2.src = "source/china.png";

_img2.onload = function(){
	render();	
};

function render(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
	ctx.drawImage(_img1, 4, 4);
	ctx.drawImage(_img2, 138, 4);
}

function startg(){
	oh=1;
}

/*
function control(){
	var i = document.getElementById(image);
	if(){
		i.src = 
	}
}*/

document.addEventListener('keydown', function(e){
	if(oh==1){
	input=e.key;
	console.log(e.key);
	//키 받기
	if(pk[0]<3){
		switch(input){
			case 'a': p1[pk[0]]='a'; pk[0]++; check++; break;
			case 'd': p1[pk[0]]='d'; pk[0]++; check++; break;
			case 'w': p1[pk[0]]='w'; pk[0]++; check++; break;
			case 's': p1[pk[0]]='s'; pk[0]++; check++; break;
			case 'q': p1[pk[0]]='q'; pk[0]++; check++; break;
		}
	}
	else if(pk[0]==3){
		if(input=='a'||input=='s'||input=='d'||input=='w'){
			alert('1p command completion.');
		}
	}
	if(pk[1]<3){
		switch(input){
			case '4': p2[pk[1]]='a'; pk[1]++; check++; break;
			case '6': p2[pk[1]]='d'; pk[1]++; check++; break;
			case '8': p2[pk[1]]='w'; pk[1]++; check++; break;
			case '5': p2[pk[1]]='s'; pk[1]++; check++; break;
			case '7': p2[pk[1]]='q'; pk[1]++; check++; break;
		}
	}
	else if(pk[1]==3){
		if(input=='4'||input=='6'||input=='8'||input=='5'){
			alert('2p command completion.');
		}
	}

	//시작
	if(input==' '){
		if(pk[0]<3||pk[1]<3){
			alert('Please enter all commands.');
		}
		else{
			pk[0]=0;
			pk[1]=0;
			time=500;
			while(check>0){
				setTimeout(function(){
					if(check%2==0){
						switch(input){
							case 'a': p1[pk[0]]='a'; pk[0]++; if(px[0]!=1){px[0]--;} break;
							case 'd': p1[pk[0]]='d'; pk[0]++; if(px[0]!=7){px[0]++;} break;
							case 'w': p1[pk[0]]='w'; pk[0]++; if(px[1]!=1){px[1]--;} break;
							case 's': p1[pk[0]]='s'; pk[0]++; if(px[1]!=3){px[1]++;} break;
							case 'q': p1[pk[0]]='q'; pk[0]++; break;
						}
					}
					else{
						switch(input){
							case 'a': p2[pk[1]]='a'; pk[1]++; if(py[0]!=1){py[0]--;} break;
							case 'd': p2[pk[1]]='d'; pk[1]++; if(py[0]!=7){py[0]++;} break;
							case 'w': p2[pk[1]]='w'; pk[1]++; if(py[1]!=1){py[1]--;} break;
							case 's': p2[pk[1]]='s'; pk[1]++; if(py[1]!=3){py[1]++;} break;
							case 'q': p2[pk[1]]='q'; pk[1]++; break;
						}
					}
				}, time);
				control();
				check--;
				time+=500;
			}
			pk[0]=0;
			pk[1]=0;
		}
	}
}
});
