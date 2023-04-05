//  Global variables

let user = Math.floor(Math.random() * 2) +1;
let newTurn;
let turnCounter = 0;
let totalScore;

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
    this.userScore = [0];
    this.computerScore = [0];
}

TurnScore.prototype.addTurnScores = function(){
    let computerSum = this.computerScore.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    })
    this.computerScore = computerSum;
    let userSum = this.userScore.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    })
    this.userScore = userSum; 
};


function diceRoll() {
    const dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

function countTurns() {
    if(turnCounter === 2){
        newTurn.addTurnScores();
        totalScore.addRound(newTurn);
        newTurn = new TurnScore();
        turnCounter = 0;
    }
}

function turnFlipper() {
    if (user === 1) {
        user = 2;
    } else { user = 1; }}   


function runTurn() {
    let roll = diceRoll()
    if (user === 1) {
        if (roll !== 1) {
        newTurn.userScore.push(roll);
        console.log(newTurn.userScore, "user")
        } else {
                newTurn.userScore = [0]
                turnCounter ++;               
                turnFlipper()
            }
        } else {
            if (roll !== 1) {
                newTurn.computerScore.push(roll);
                console.log(newTurn.computerScore, "computer")
            } else {
                newTurn.computerScore = [0]
                turnCounter ++;            
                turnFlipper();
            } 
    }
    return newTurn
}


//UI Logic

function startGame (){
    totalScore = new TotalScore();
    newTurn = new TurnScore()
    console.log(totalScore);
}

function clickRoll () {
    runTurn();
    countTurns();
    console.log(turnCounter);
}


window.addEventListener("load", function(){
    this.document.getElementById("start-game").addEventListener("click", startGame);
    this.document.getElementById("roll").addEventListener("click", clickRoll);
})