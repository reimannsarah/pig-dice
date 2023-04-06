//  Global variables

let user = 2;
let newTurn;
let turnCounter = 0;
let totalScore;
let hold = false;
let runningUserScore = 0;
let runningComputerScore = 0;

//Business Logic

function TotalScore() {
    this.scores = {};
    this.round = 0;
}

TotalScore.prototype.assignRound = function () {
    this.round += 1;
    return this.round;
};

TotalScore.prototype.addRound = function(score) {
    this.scores[this.assignRound()] = score;
};

function TurnScore() {
    this.userScore = 0;
    this.computerScore = 0;
}

function diceRoll() {
    const dice = Math.floor(Math.random() * 6) + 1;
    return dice;
} 

function runUserTurn() {
    let roll = diceRoll();
    displayDice(roll);

    if (roll !== 1) {
    newTurn.userScore += roll;
    } else {
        newTurn.userScore = 0;    
        holdButton()       
    }
}

function runComputerTurn() {
    let roll = diceRoll();
    displayDice(roll);
    if (roll !== 1) {
        newTurn.computerScore += roll;
        turnCounter++;
    } else {
        newTurn.computerScore = 0;       
        turnCounter ++;                    
    }
}

function holdButton() {
    turnCounter++;
    while (turnCounter < 2) {
        runComputerTurn();
        displayComputerScore();
    }
    if (turnCounter === 2){
        countTurns();
        popup();
    }  
    
}

function countTurns() {
    runningUserScore += newTurn.userScore;
    runningComputerScore += newTurn.computerScore;
    totalScore.addRound(newTurn);
    console.log(totalScore);
    newTurn = new TurnScore();
    turnCounter = 0;
    displayRound();
    console.log("running comp score " + runningComputerScore)
    console.log("running user score " + runningUserScore)
}

function win() {
    if (runningUserScore >= 20) {
        return "userWin";
    } else if (runningComputerScore >= 20) {
        return "computerWin";
    }
}

//UI Logic

function startGame() {
    totalScore = new TotalScore();
    newTurn = new TurnScore()
    console.log(totalScore);
}

function clickRoll() {
    runUserTurn();
    displayUserScore();
    popup();
}

function displayUserScore() {
    document.getElementById("bucky-score").innerText = newTurn.userScore;
}

function displayComputerScore() {
    document.getElementById("berli-score").innerText = newTurn.computerScore;
}

function displayDice(roll) {
    document.getElementById("dice").innerText =  roll;
}

function displayRound() {
    let roundContainer = document.getElementById("round-container");
    let roundDisplay = document.createElement("div");
    let buckyP = document.createElement("p");
    let berliP = document.createElement("p");
    let keys = Object.keys(totalScore.scores);
    let round = keys.pop();
    roundDisplay.innerText = "Round: " + totalScore.round;
    buckyP.innerText = "Bucky: " + totalScore.scores[round].userScore;
    berliP.innerText = "Berli: " + totalScore.scores[round].computerScore;
    roundContainer.append(roundDisplay,buckyP,berliP);
}

function displayReset() {
    document.getElementById("popup").setAttribute("class", "hidden");
    location.reload();
}

function popup() {
    let overlay = document.getElementById("popup");
    let winnerPopup = document.getElementById("winner");
    let winCheck = win();
    if (winCheck === "userWin") {
        winnerPopup.innerText = "You WON DUmmy";
        overlay.removeAttribute("class");
    } else if (winCheck === "computerWin") {
        winnerPopup.innerText = "dumb. You lost. dumb. pffff.";
        overlay.removeAttribute("class");
    }
}

window.addEventListener("load", function(){
    this.document.getElementById("start-game").addEventListener("click", startGame);
    this.document.getElementById("roll").addEventListener("click", clickRoll);
    this.document.getElementById("hold").addEventListener("click", holdButton);
    this.document.querySelector(".new-game").addEventListener("click", displayReset)
    
})