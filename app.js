let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let highscore=0;
let boxes=["box1","box2","box3","box4"];
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    console.log("Game started");
    started=true;
    levelup();
});

function flashon(box){
    let a=document.querySelector(`.${box}`);
    a.classList.add("flash");
    setTimeout(function(){
        a.classList.remove("flash");
    },250);
}

function userflash(box){
    
    box.classList.add("usrflash");
    setTimeout(function(){
        box.classList.remove("usrflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let rndinx=Math.floor(Math.random()*4);
    flashon(boxes[rndinx]);
    gameseq.push(boxes[rndinx]);
    console.log(gameseq);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        if(highscore<level){
            highscore=level;
        }
        h3.innerHTML=`Sorry You lost the game<br>Your Score is ${level}<br>The Game high score is ${highscore}<br>Please enter any key to start`;
        a=document.querySelector("body");
        a.style.backgroundColor="red";
        setInterval(function(){
            a.style.backgroundColor="white";
        },100);
        reset();
    }
}

function btnPress(){
    console.log(this);
userflash(this);
userinp=this.getAttribute("id");
userseq.push(userinp);
checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".boxes");
for(box of allbtns){
    box.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}