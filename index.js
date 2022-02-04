var name1=prompt("Enter name of player number 1:");
var name2=prompt("Enter the name of player 2:");
var player1=name1+ " wins🚩";
var player2=name2+" wins🚩";
var random=Math.floor(Math.random()*6)+1;
var imgsrc="dice"+random+".png";
var img1=document.querySelector("#img").setAttribute("src",imgsrc);
var random1=Math.floor(Math.random()*6)+1;
var imgsrc2="dice"+random1+".png";
document.querySelector("#img1").setAttribute("src",imgsrc2);
var h1=document.querySelector("h1");
if(random>random1){
    h1.textContent=player1;
}
else if(random1>random){
    h1.textcontent=player2;
}
else{
    h1.innerHTML="draw!"
}