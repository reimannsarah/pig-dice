

//  Global variables

let user = 2;
let newTurn;
let turnCounter = 0;
let totalScore;
let hold = false;
let runningUserScore = 0;
let runningComputerScore = 0;
let timer = 800;
let winningScore = 100;

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
    
    switch (roll) {
        case 2:
            newTurn.computerScore += roll;
            turnCounter++;
            setTimeout(displayDice, timer, roll);
            setTimeout(displayComputerScore, timer);
            break;
        case 3:
            newTurn.computerScore += roll;
            setTimeout(displayDice, timer, roll);
            setTimeout(displayComputerScore, timer);
            break;
        case 4:
            newTurn.computerScore += roll;
            turnCounter++;
            setTimeout(displayDice, timer, roll);
            setTimeout(displayComputerScore, timer);
            break;
        case 5:
            newTurn.computerScore += roll;
            setTimeout(displayDice, timer, roll);
            setTimeout(displayComputerScore, timer);
            break;
        case 6:
            newTurn.computerScore += roll;
            setTimeout(displayDice, timer, roll);
            setTimeout(displayComputerScore, timer);
            break;
        default:
            newTurn.computerScore = 0;
            turnCounter++;
            setTimeout(displayDice, timer, roll);
            setTimeout(displayComputerScore, timer);
    }
}

function holdButton() {
    turnCounter++;
    while (turnCounter < 2) {
        runComputerTurn();
    }
    if (turnCounter === 2){
        setTimeout(countTurns, 700);
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
}

function win() {
    if (runningUserScore >= winningScore) {
        return "userWin";
    } else if (runningComputerScore >= winningScore) {
        return "computerWin";
    }
}

//UI Logic

function startGame() {
    document.getElementById("container").removeAttribute("class");
    document.getElementById("start-game").setAttribute("class", "hidden");
    totalScore = new TotalScore();
    newTurn = new TurnScore();
}

function clickRoll() {
    runUserTurn();
    displayUserScore();
    popup();
}

function displayUserScore() {
    document.getElementById("bucky-score").innerText = newTurn.userScore;
    document.getElementById("bucky-total").innerText = runningUserScore;
}

function displayComputerScore() {
    document.getElementById("berli-score").innerText = newTurn.computerScore;
    document.getElementById("berli-total").innerText = runningComputerScore;
}

function displayDice(roll) {
    document.getElementById("dice").innerText =  roll;
}

function displayRound() {
    let roundContainer = document.getElementById("round-container");
    let roundDisplay = document.createElement("div");
    let keys = Object.keys(totalScore.scores);
    let round = keys.pop();
    roundDisplay.innerText = `ROUND ${totalScore.round}: Bucky ${totalScore.scores[round].userScore}, Berli ${totalScore.scores[round].computerScore}`;
    roundContainer.append(roundDisplay);
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
    this.document.querySelector(".new-game").addEventListener("click", displayReset);
    
});