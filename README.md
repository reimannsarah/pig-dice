# TDD

Describe: TotalScore()

Test: "It should create an empty object to store instances of round scores"
Code: let totalScore = new TotalScore()
totalScore;
Expected Output: { scores: {}, round: 0; }

Describe: TurnScore()

Test: "It should create an instance of the round score"
Code: let turnScore = new TurnScore(0, 0);
turnScore;
Expected Output: { userScore: 0, computerScore: 0 }