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
    return Math.floor(Math.random() * 6) + 1
}

