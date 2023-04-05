function TotalScore() {
    this.scores = {};
    this.round = 0;
}

TotalScore.prototype.assignRound = function () {
    this.round += 1;
    return this.round;
};

TotalScore.prototype.addTurnScore = function (score) {
    this.scores[this.assignRound()] = score;
}

function TurnScore() {
    this.userScore = [];
    this.computerScore = [];
}
//  Global variables
let scoreTracker = [];
let user = 1;

function diceRoll() {
    const dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

function scoreArrayer() {
    let roll = diceRoll();
    if (roll !== 1) {
        scoreTracker.push(roll);
    } else { scoreTracker = [] }
}

function turnFlipper() {
    if (user === 1) {
        user = 2;
    } else { user = 1; }
}

let newTurn = new TurnScore()

function runTurn() {
    if (user === 1) {
        scoreArrayer();
        newTurn.userScore.push(scoreTracker);
            if (scoreTracker.length === 0) {
                turnFlipper()
            }
        } else {
            scoreArrayer();
            newTurn.computerScore.push(scoreTracker);
            if (scoreTracker.length === 0) {
                turnFlipper();
            } 
    }
    return newTurn
}

// function addScore() {
//     let scoreArray = [];
//     let roll = diceRoll()
//     while (roll !== 1) {
//         scoreArray.push(roll);
//         roll = diceRoll();
//     }
//     return scoreArray
// }
