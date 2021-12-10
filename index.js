//for image 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDiceImageLink = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageLink);

//for image 2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomDiceImageLink2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageLink2);

//to display winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}