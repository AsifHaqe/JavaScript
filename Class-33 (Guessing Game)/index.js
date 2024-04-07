var numberofWon = 0;
var numberofLost = 0;

for(i = 1;i <= 5;i++){
    var guessNumber = parseInt(prompt("Enter a Number From 1  to 5"));

var randomNumber = Math.floor(Math.random()*5) + 1;
if (guessNumber == randomNumber){
    console.log("You have Won")
    numberofWon++
}else{
    console.log("You Have Lost.The Random Number was" + randomNumber);
    numberofLost++
}
}

document.write("Number of won " + numberofWon + "<br>")
document.write("Number of lost " + numberofLost + "<br>")