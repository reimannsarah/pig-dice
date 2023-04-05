# TDD

Describe: TotalScore()

Test: "It should create an empty object to store instances of round scores"
Code: let totalScore = new TotalScore()
totalScore;
Expected Output: { scores: {}, round: 0 }

Describe: TurnScore()

Test: "It should create an instance of the round score"
Code: let turnScore = new TurnScore(0, 0);
turnScore;
Expected Output: { userScore: 0, computerScore: 0 }

Describe: TotalScore.prototype.assginRound()

Test: "It should update the round"
Code: let totalScore =  new TotalScore();
let turnScore = new TurnScore(0, 0);
totalScore.assignRound();
totalScore;
Expected Output: { scores: {}, round: 1 }

Describe: TotalScore.prototype.addTurnScore()

Test: "It should add the instance of turnScore to the TotalScore object at scores key"
Code:
let totalScore =  new TotalScore();
let turnScore = new TurnScore(0, 0);
totalScore.addTurnScore();
totalScore; 