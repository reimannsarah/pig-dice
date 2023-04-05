function TotalScore() {
    this.scores = {};
    this.round = 0;
}

TotalScore.prototype.assignRound = function () {
    this.round += 1;
    return this.round;
};

function TurnScore(userScore, computerScore) {
    this.userScore = userScore;
    this.computerScore = computerScore;
}

