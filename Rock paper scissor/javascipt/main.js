// create a rock, paper, scissors game where
// -user inputs rock, paper, or scissors,
// -and bot generates either rock, paper, scissors as well.
// -After every round have the winning score and a message announcing who won that round


// rock, paper, scissors game
// we need two variables bot and user
var botScore = 0,
    playerScore = 0;


// in order to make bot random we need to use the Math.random()

// for the user we need a onClick() for them to input the value of the user variable
document.getElementById("rock").onclick = playerThrowsRock;

function playerThrowsRock() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "rock");
    console.log(botsWeapon);
    displayCompleteMessage(`the computer used ${botsWeapon} as a weapon`);
}


document.getElementById("scissors").onclick = playerThrowsScissors;

function playerThrowsScissors() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "scissors");
    console.log(botsWeapon);
    displayCompleteMessage(`the computer used ${botsWeapon} as a weapon`);
}



document.getElementById("paper").onclick = playerThrowsPaper;

function playerThrowsPaper() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "paper");
    console.log(botsWeapon);
    displayCompleteMessage(`the computer used ${botsWeapon} as a weapon`);
}



document.getElementById("spock").onclick = playerThrowsSpock;

function playerThrowsSpock() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "spock");
    console.log(botsWeapon);
    displayCompleteMessage('the computer used ${botsWeapon} as a weapon');
}



document.getElementById("lizard").onclick = playerThrowsLizard;

function playerThrowsLizard() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "lizard");
    console.log(botsWeapon);
    displayCompleteMessage('the computer used ${botsWeapon} as a weapon');
}
// conditional to check if rock, paper, or scissors wins (including a draw)
function getRandomWeapon() {
    var randomNumber = Math.random();
    var botsWeapon = "rock";
    if (randomNumber < .20) {
        botsWeapon = "scissors";
    }
    else if (randomNumber < .40) {
        botsWeapon = "paper";
    }
    else if (randomNumber < .60) {
        botsWeapon = "spock";
    }
    else if (randomNumber < .80) {
        botsWeapon = "lizard";
    }
    return botsWeapon;
}



// console.log(checkWhoWon(botsWeapon));
// console.log(checkWhoWon(playersWeapon));

// if draw console.log("it's a draw") neither bot or user get a point
function checkWhoWon(botsWeapon, playersWeapon) {
    if (botsWeapon == playersWeapon) {
        displayCompleteMessage("There was tie");
    }
    // if bot wins console.log ("bot wins") bot score is updates ++1
    else if (
        (botsWeapon == "scissors" && playersWeapon == "lizard")||
        (botsWeapon == "lizard" && playersWeapon == "paper" )||
        (botsWeapon == "paper" && playersWeapon == "spock")||
        (botsWeapon =="spock" && playersWeapon =="rock")||
        (botsWeapon == "rock" && playersWeapon == "lizard")|
        (botsWeapon == "lizard" && playersWeapon == "spock")||
        (botsWeapon == "spock" && playersWeapon == "scissors")||
        (botsWeapon == "scissors" && playersWeapon == "paper") ||
        (botsWeapon == "paper" && playersWeapon == "rock") ||
        (botsWeapon == "rock" && playersWeapon == "scissors")
    ) {
        increaseBotScore();
    }
    // if user wins console.log ("you win") user score is updated ++1
    else if (
        (playersWeapon == "scissors" && botsWeapon == "lizard")||
        (playersWeapon == "lizard" && botsWeapon == "paper" )||
        (playersWeapon == "paper" && botsWeapon == "spock")||
        (playersWeapon =="spock" && botsWeapon =="rock")||
        (playersWeapon == "rock" && botsWeapon == "lizard")|
        (playersWeapon == "lizard" && botsWeapon == "spock")||
        (playersWeapon == "spock" && botsWeapon == "scissors")||
        (playersWeapon == "scissors" && botsWeapon == "paper") ||
        (playersWeapon == "paper" && botsWeapon == "rock") ||
        (playersWeapon == "rock" && botsWeapon == "scissors")
    ) {
        increasePlayerScore();
    }
}













function increaseBotScore() {
    botScore += 1;
    document.getElementById("computerScore").innerHTML = botScore;
    displayCompleteMessage("Your losing")("You are doomed");

}
function increasePlayerScore() {
    playerScore += 1;
    document.getElementById("humanScore").innerHTML = playerScore;
    displayCompleteMessage("Congratulations! You beat Grim");
    console.log()
}
function displayCompleteMessage(msg) {
    document.getElementById("status").innerHTML = msg;
    console.log()
}
// stack
// var storagedHighScore = localStorage.getItem("highscore");
// if (storagedHighScore || score > parseInt(storagedHighScore)) {
//     localStorage.setItem("highscore", score);

// session and local storage













function increaseBotScore() {
    botScore += 1;
    document.getElementById("computerScore").innerHTML = botScore;
    displayCompleteMessage("Sorry, you're a loser");

}
function increasePlayerScore() {
    playerScore += 1;
    document.getElementById("humanScore").innerHTML = playerScore;
    displayCompleteMessage("Congradulations! You're a winner");
    console.log()
}
function displayCompleteMessage(msg) {
    document.getElementById("status").innerHTML = msg;
    console.log()
}
// stack
// var storagedHighScore = localStorage.getItem("highscore");
// if (storagedHighScore || score > parseInt(storagedHighScore)) {
//     localStorage.setItem("highscore", score);

// session and local storage
