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

}

//  Global variables

let user = Math.floor(Math.random() * 2) +1;

function diceRoll() {
    const dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

function turnFlipper() {
    if (user === 1) {
        user = 2;
    } else { user = 1; }
}

let newTurn = new TurnScore()

// function takeTurn () {
//     for (let i = 0; i < 2; i ++) {
//         runTurn();
//     }
// }

function runTurn() {
    let roll = diceRoll()
    if (user === 1) {
        if (roll !== 1) {
        newTurn.userScore.push(roll);
        console.log(newTurn.userScore)
        } else {
                newTurn.userScore = [0]
                turnFlipper()
            }
        } else {
            if (roll !== 1) {
                newTurn.computerScore.push(roll);
                console.log(newTurn.computerScore)
            } else {
                newTurn.computerScore = [0]
                turnFlipper();
            } 
    }
    return newTurn
}

