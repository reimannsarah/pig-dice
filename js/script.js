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

function TurnScore(userScore, computerScore) {
    this.userScore = userScore;
    this.computerScore = computerScore;
}

function diceRoll() {
    const dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

// function diceCheck(dice) {
//     if (dice !== 1) {
//         return dice;
//     } else { return false }
// }

function addScore() {
    let scoreArray = [];
    let roll = diceRoll()
    while (roll !== 1) {
        scoreArray.push(roll);
        roll = diceRoll();
    }
    return scoreArray
}
