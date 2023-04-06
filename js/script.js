//  Global variables

let user = 2;
let newTurn;
let turnCounter = 0;
let totalScore;
let hold = false;

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

//We might not need this, but we might need this. 
function turnFlipper() {
    if (user === 1) {
        user = 2;
    } else { user = 1; }}   

function runUserTurn() {
    let roll = diceRoll();
    displayDice(roll);
    if (roll !== 1) {
    newTurn.userScore += roll;
    console.log(newTurn.userScore, "user")
    console.log("user rolls:" + " " + roll);

    } else {
        newTurn.userScore = 0;
        console.log(newTurn.userScore, "user")
        console.log("user rolls:" + " " + roll);        
        holdButton()       
    }

}

function runComputerTurn() {
    let roll = diceRoll()
    displayDice(roll);
    if (roll !== 1) {
        newTurn.computerScore += roll;
        console.log(newTurn.computerScore, "computer")       
        console.log("computer rolls:" + " " + roll);
        turnCounter++;
    } else {
        newTurn.computerScore = 0;
        console.log(newTurn.computerScore, "computer")
        console.log("computer rolls:" + " " + roll);        
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
    }  
}



function countTurns() {
    totalScore.addRound(newTurn);
    console.log(totalScore);
    newTurn = new TurnScore();
    turnCounter = 0;
    displayRound();
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

window.addEventListener("load", function(){
    this.document.getElementById("start-game").addEventListener("click", startGame);
    this.document.getElementById("roll").addEventListener("click", clickRoll);
    this.document.getElementById("hold").addEventListener("click", holdButton);
    
})