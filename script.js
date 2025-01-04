var plScore=0,pcScore=0,pc=document.getElementsByClassName('pc-choice'),pl=document.getElementsByClassName("player-choice")
,board=document.getElementById("score");
		function play(n){
			var r=Math.floor((Math.random()*3));
			document.getElementById("footer").style.display="none";
				
					pc[r].style.visibility="initial";
					pl[n].style.visibility="initial";
				
				 setTimeout(function(){ 
				 	var finish=document.getElementById("screen"),check=document.getElementById("check");
				 	finish.style.display="initial";
				 	if(r==n){check.innerHTML="it\'s a draw"}
				 	else if(n==0 && r!=1){check.innerHTML="You Win"}
				 	else if(n==1 && r!=2){check.innerHTML="You Win"}
				 	else if(n==2 && r!=0){check.innerHTML="You Win"}

				 	else if(n==0 && r!=2){check.innerHTML="You Lose"}
				 	else if(n==1 && r!=0){check.innerHTML="You Lose"}
				 	else if(n==2 && r!=1){check.innerHTML="You Lose"}
				 }, 1000);
			
		}
		function replay(){
			var finish=document.getElementById("screen"),check=document.getElementById("check").innerHTML;
			finish.style.display="none";
			document.getElementById("footer").style.display="initial";
			for(var i=0;i<3;i++){
				pc[i].style.visibility="hidden";
				pl[i].style.visibility="hidden";
			}
			
			if(check=="it\'s a draw"){
				board.innerHTML= "Computer : "+ pcScore + " ---- player : "+plScore;
			}else if(check=="You Win"){
				plScore++;
				board.innerHTML= "Computer : "+ pcScore + " ---- player : "+plScore;
			}else if(check=="You Lose"){
				pcScore++;
				board.innerHTML= "Computer : "+ pcScore + " ---- player : "+plScore;
			}
			if(plScore==5){alert('Impossible how did you beat me');
			plScore=0;pcScore=0;
				document.getElementById("screen").style.display="none";
			document.getElementById("footer").style.display="none";
			document.getElementById("startup").style.display="initial";
			for(var i=0;i<3;i++){
				pc[i].style.visibility="hidden";
				pl[i].style.visibility="hidden";
			}
			board.innerHTML= "Computer : "+ pcScore + " ---- player : "+plScore;}
			else if(pcScore==5){alert('you still think you can beat me then go ahead and try');
			plScore=0;pcScore=0;
				document.getElementById("screen").style.display="none";
			document.getElementById("footer").style.display="none";
			document.getElementById("startup").style.display="initial";
			for(var i=0;i<3;i++){
				pc[i].style.visibility="hidden";
				pl[i].style.visibility="hidden";
			}
			board.innerHTML= "PC : "+ pcScore + " ---- player : "+plScore;}
		}
		function reset(n){
			switch(n){
				case 1:
				document.getElementById("startup").style.display="none";
				document.getElementById("footer").style.display="initial";
				break;
				case 2:
				plScore=0;pcScore=0;
				document.getElementById("screen").style.display="none";
			document.getElementById("footer").style.display="none";
			document.getElementById("startup").style.display="initial";
			
			for(var i=0;i<3;i++){
				pc[i].style.visibility="hidden";
				pl[i].style.visibility="hidden";
			}
			board.innerHTML= "PC : "+ pcScore + " ---- player : "+plScore;
				break;
			}
			
		}
