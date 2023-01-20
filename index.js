var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ")
var score = 0;

console.log("Welcome " + userName + " to Marvel Fandom Quiz")

function play(question, answer) {
  var readlineSync = require("readline-sync");

  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!")
    score++;
  } else {
    console.log("You are wrong!")
  }
  console.log("Your score is: " + score)
}

var questions = [
  {
    question: "Who was the main Antagonist in Avengers Endgame? ",
    answer: "Thanos"
  },
  {
    question: "How many stones can fit into the gauntlet?",
    answer: "5"

  },
  {
    question: "Who is the coolest Avenger? ",
    answer: "ironman"

  }

]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);

}
console.log("Your Final Score is: " + score);