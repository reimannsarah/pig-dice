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
totalScore.assignRound();
totalScore.addTurnScore(turnScore);
totalScore; 
Expected Output: { scores: 1: { userScore: 0, computerScore: 0 }
, round: 1 }

Describe: diceRoll()

Test: "It will return a number between 1 and 6"
Code: diceRoll();
Expected Output: typeof Number;

Describe: diceCheck()

Test: "It will check if the number is 1 and if so return false"
Code: diceRoll(1);
Expected Output: false;

Test: "It will it's not 1, return the number"
Code: diceRoll(dice);
Expected Output: typeof Number || false;