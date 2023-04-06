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

// TurnScore.prototype.calculateTurnScores = function(){
//     let computerSum = this.computerScore.reduce(function(accumulator, currentValue){
//         return accumulator + currentValue;
//     })
//     this.computerScore = computerSum;
//     let userSum = this.userScore.reduce(function(accumulator, currentValue){
//         return accumulator + currentValue;
//     })
//     this.userScore = userSum; 
// };


function diceRoll() {
    const dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

function turnFlipper() {
    if (user === 1) {
        user = 2;
    } else { user = 1; }}   

function runUserTurn() {
    let roll = diceRoll()
    if (roll !== 1 && hold === false) {
    newTurn.userScore += roll;
    console.log(newTurn.userScore, "user")
    } else if (roll !== 1 && hold === true){
        turnCounter++;               
        turnFlipper();
        holdFlipper();

    } else {
        newTurn.userScore = 0;
        turnCounter++;
        turnFlipper();
        runComputerTurn();
        console.log(turnCounter + "turns")
    }
    
}

function runComputerTurn() {
    if (user === 2) {
    let roll = diceRoll()
    for (i = 0; i < 2; i++){
        if(i < 1) {
            if (roll !== 1) {
                newTurn.computerScore += roll;
                console.log(newTurn.computerScore, "computer")
                console.log("loop1!")
            } else if(roll === 1){
                newTurn.computerScore = 0;
                turnCounter ++;            
                turnFlipper();
                console.log("loop2!")
            }
        }else if (i === 1) {
            turnCounter++;
            turnFlipper();
            console.log("llop3!")
        }
    } console.log("looped")
    }
}

function holdFlipper() {
    if (hold === true) {
        hold = false;
    }
}

function holdButton() {
    if (hold === false) {
        hold = true;
    }
    runComputerTurn();
}



function countTurns() {
    totalScore.addRound(newTurn);
    console.log(totalScore);
    newTurn = new TurnScore();
    turnCounter = 0;
}

//UI Logic

function startGame (){
    totalScore = new TotalScore();
    newTurn = new TurnScore()
    console.log(totalScore);
}

function clickRoll () {
    runUserTurn();
    if (turnCounter === 2){
    countTurns();
    } 
}

window.addEventListener("load", function(){
    this.document.getElementById("start-game").addEventListener("click", startGame);
    this.document.getElementById("roll").addEventListener("click", clickRoll);
    this.document.getElementById("hold").addEventListener("click", holdButton);
})