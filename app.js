const randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

const diceNumber=`dice${randomNumber1}.png`;
console.log(diceNumber);

const diceImage=`images/${diceNumber}`;
console.log(diceImage);

const image=document.querySelector(".img1");
image.setAttribute("src",diceImage);

const randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

const diceNumber1=`dice${randomNumber2}.png`;
console.log(diceNumber1);

const diceImage1=`images/${diceNumber1}`;
console.log(diceImage1);

const image1=document.querySelector(".img2");
image1.setAttribute("src",diceImage1);

if(randomNumber1>randomNumber2)
{
    document.querySelector('h1').innerHTML="Player 1 Won!!!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector('h1').innerHTML="Player 2 Won!!!";
}
else
{
    document.querySelector('h1').innerHTML="Tie";
}