var choices=["rock","paper","scissor"];
var i = Math.floor(Math.random() * 3);
var computerChoice=choices[i];
var pointsplayer=0;
var pointscomputer=0;

function displayScore(){
    var x=document.querySelector(".score").innerHTML=pointsplayer+"  -  "+pointscomputer;
}
setInterval(displayScore,50);

function start(playerChoice){
    var dis=document.getElementById("res");
    dis.style.display="inline-flex";
    if(playerChoice==computerChoice){
        drawGame(playerChoice);
    }
    if(playerChoice=="rock" && computerChoice=="scissor"){
        winrs(playerChoice);
    }
    else if(playerChoice=="paper" && computerChoice=="rock"){
        winpr(playerChoice);
    }
    else if(playerChoice=="scissor" && computerChoice=="paper"){
        winsp(playerChoice);
    }
    else if(playerChoice=="scissor" && computerChoice=="rock"){
        losesr(playerChoice);
    }
    else if(playerChoice=="rock" && computerChoice=="paper"){
        loserp(playerChoice);
    }
    else if(playerChoice=="paper" && computerChoice=="scissor"){
        loseps(playerChoice);
    }
    function gameContinue(){
		i = Math.floor(Math.random() * 3);
        computerChoice=choices[i];  
		dis.style.display = "none";
	}
	setTimeout(gameContinue, 1200);
}

function drawGame(userChoice){
    document.querySelector(".verdict").innerHTML="The Computer choose "+computerChoice+" and it's a draw";
    var x=document.getElementById(userChoice);
    x.classList.remove("image");
    x.classList.add("blackbtn");
    setTimeout(function(){
        x.classList.add("image");
        x.classList.remove("blackbtn");
    },1200);
}
function winrs(userChoice){
    pointsplayer++;
    document.querySelector(".verdict").innerHTML="The Computer choose "+computerChoice+" and you win.";
    var x=document.getElementById(userChoice);
    x.classList.remove("image");
    x.classList.add("greenbtn");
    setTimeout(function(){
        x.classList.add("image");
        x.classList.remove("greenbtn");
    },1200);
}
function winpr(userChoice){
    pointsplayer++;
    document.querySelector(".verdict").innerHTML="The Computer choose "+computerChoice+" and you win.";
    var x=document.getElementById(userChoice);
    x.classList.remove("image");
    x.classList.add("greenbtn");
    setTimeout(function(){
        x.classList.add("image");
        x.classList.remove("greenbtn");
    },1200);
}
function winsp(userChoice){
    pointsplayer++;
    document.querySelector(".verdict").innerHTML="The Computer choose "+computerChoice+" and you win.";
    var x=document.getElementById(userChoice);
    x.classList.remove("image");
    x.classList.add("greenbtn");
    setTimeout(function(){
        x.classList.add("image");
        x.classList.remove("greenbtn");
    },1200);
}
function losesr(userChoice){
    pointscomputer++;
    document.querySelector(".verdict").innerHTML="The Computer choose "+computerChoice+" and you lose.";
    var x=document.getElementById(userChoice);
    x.classList.remove("image");
    x.classList.add("redbtn");
    setTimeout(function(){
        x.classList.add("image");
        x.classList.remove("redbtn");
    },1200);
}
function loseps(userChoice){
    pointscomputer++;
    document.querySelector(".verdict").innerHTML="The Computer choose "+computerChoice+" and you lose.";
    var x=document.getElementById(userChoice);
    x.classList.remove("image");
    x.classList.add("redbtn");
    setTimeout(function(){
        x.classList.add("image");
        x.classList.remove("redbtn");
    },1200);
}
function loserp(userChoice){
    pointscomputer++;
    document.querySelector(".verdict").innerHTML="The Computer choose "+computerChoice+" and you lose.";
    var x=document.getElementById(userChoice);
    x.classList.remove("image");
    x.classList.add("redbtn");
    setTimeout(function(){
        x.classList.add("image");
        x.classList.remove("redbtn");
    },1200);
}