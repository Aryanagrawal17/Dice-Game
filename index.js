var randomNumber1=Math.floor((Math.random()*6)+1);
var randomdice="dice" + randomNumber1 +".png";
var randomdiceimage="./images/" + randomdice;
var randompick=document.querySelectorAll("img")[0];
randompick.setAttribute("src",randomdiceimage);
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomdice1="dice" + randomNumber2 +".png";
var randomdiceimage1="./images/" + randomdice1;
var randompick1=document.querySelectorAll("img")[1];
randompick1.setAttribute("src",randomdiceimage1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 won";
}else{
    document.querySelector("h1").innerHTML="Draw";
}