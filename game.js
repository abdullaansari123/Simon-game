var myButton1 = document.getElementById("greenbtn");
var myButton2= document.getElementById("redbtn");
var myButton3= document.getElementById("yellowbtn");
var myButton4 = document.getElementById("bluebtn");
var computer=[];
var user=[] ;
var level ="0" ;
var btnElements = document.getElementsByClassName("btn");
for (var i = 0; i < btnElements.length; i++) {
    btnElements[i].disabled = true;
}
var heading = document.getElementById("level-title");
document.addEventListener("keypress",function(event){
    const keyPressed = event.key;
    if (keyPressed === "Enter") {
        for (var j = 0; j < btnElements.length; j++) {
            btnElements[j].disabled = false;
        }
        heading.innerText = "GAME STARTED";
        setTimeout(function() {
            level=1;
            heading.innerText = "level "+level;
        },1000);
        computer = [];
        buttonassign();
    } else{
    }   
});
// functions assigning button
function buttonassign(){
    var computermath= Math.floor(Math.random()*3+1);
    if(computermath===1){
        computerinput=myButton1;
    }else if(computermath===2){
        computerinput=myButton2;
    }else if(computermath===3){
        computerinput=myButton3;
    }else{
        computerinput=myButton4;
    }
    computer.push(computerinput);
    setTimeout(function() {
        computerfn(computerinput);
    },1000);
}
// function computer pressing
function computerfn(btn) {
    btn.classList.add("compressed");
    setTimeout(function() {
        btn.classList.remove("compressed");
    }, 500);
}
// function user input
function input(btn) {
    btn.classList.add("pressed");
    setTimeout(function() {
        btn.classList.remove("pressed");
    }, 500);
    user.push(btn);
    checking();
}
// checking result
function checking() {
    for (let a = 0; a < user.length; a++) {
        if (computer[a] !== user[a]) {
            for (var k = 0; k < btnElements.length; k++) {
                btnElements[k].disabled = true;
            }
            heading.innerText = "game-over";
            setTimeout(function() {
                heading.innerText = "PRESS ENTER KEY TO RESTART";
            }, 500);
            level =1;
            user = [];
            computer = [];
            return;
        }
    }

    if (computer.length === user.length) {
        level+=1;
        heading.innerText = "level " + level;
        user = [];
        buttonassign();
    }
}


