'use strict';

// Put a secretNumber between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to display message
const displayMessage = function(message){
document.querySelector(".message").textContent = message};

// Define an Event on the check button to compare the value of the guess with our secretNumber
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

//Define our game's logic
    //When guess is not a number
    if (!guess) {
        displayMessage("😱 No number!");
    }
    //When guess is not between 1 and 20
    else if (!(guess > 0 && guess < 21)) {
        displayMessage("Between 1 and 20 baby 😾");
    }
    // When we find the secretNumber
    else if (guess === secretNumber) {
        displayMessage("👌 Correct Number!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
    //When guess is not secretNumber
    else if (guess !== secretNumber) {
        if (score > 1) {
            if (guess > secretNumber) {
                displayMessage("You're so high in the sky");
                score -= 1;
                document.querySelector(".score").textContent = score;
            } else if (guess < secretNumber) {
                displayMessage("You're so down in the town");
                score -= 1;
                document.querySelector(".score").textContent = score;
            }
        } else {
            displayMessage("Oups, you lost!");
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }

    //Define an Event on the Again button to reload the game without refreshing the page

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";

});

})
;