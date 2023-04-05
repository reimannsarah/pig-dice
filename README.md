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

Describe: runTurn();

Test: "It will push each roll to NewTurn instance for corresponding player and flip turn when 1 is rolled"
Code: runTurn();
Expected Output: newTurn = { userScore: [an array], computerScore: [an array] }

Test: "It will add 1 to the global variable turnCounter, every time the user/computer rolls a 1"
Code: runTurn(); until roll = 1
Expected Out: 1

Describe: TurnScore.prototype.addTurnScores():

Test: "it will add together the scores in the score arrays for both the user and the computer"
Code: newTurn.addTurnScores();
Expected Output: { userScore: 0, computerScore: 0}

