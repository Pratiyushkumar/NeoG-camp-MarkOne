var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
var nameIntro = chalk.blue( readlineSync.question("What is your name "));


console.log(`Welcome ${nameIntro}, Let's check Wether you know Pratiyush?`);
console.log("...............................................");


console.log("Let's Begin!!!!!!!!");
console.log("...............................................");


var questionaire =[
  questionOne  = {
    question : "Where Do I Live ",
    answer :"Delhi"
  },
  questionTwo = {
    question : "What is mine SuperHero ",
    answer : "Iron Man"
  },
  questionThree = {
   question : "Where DO I work ",
    answer : "Accenture"
  },
   questionFour = {
   question : "What is my hobby ",
    answer : "Badminton"
  },
   questionFive = {
   question : "what is my favourite food ",
    answer : "upama"
  },
   questionSix = {
   question : "what is my favourite movie ",
    answer : "Zindagi na millegi dobara"
  },
   questionSeven = {
   question : "what is my favourite time pass ",
    answer : "watching TV shows"
  },
   questionEight = {
   question : "who is my favourite person ",
    answer : "Mother"
  },
  questionNine = {
   question : "Do I have a girlfreind ",
    answer : "Yes"
  },
  questionTen = {
   question : "Do I love Front End or fullstack Develpment",
    answer : "Font Eend"
  },
  // questionEleven = {
  //  question : "Do I like burger ",
  //   answer : "yes"
  // },
  // questionTwelve = {
  //  question : "Do I like making freinds ",
  //   answer : "Yes but not many"
  // },
  // questionThirteen = {
  //  question : "Where I like to visit, Hill stations or beach ",
  //   answer : "Hil stations"
  // },
  // questionFourteen = {
  //  question : "What is mine current CTC ",
  //   answer : "Can't tell, hehehehe!!!!!"
  // },
  // questionFifteen = {
  //  question : "Do I get angry",
  //   answer : "Yes"
  // },
]

var highScore = [
  participant1 = {
    name: "Tanay",
    score : 10
  }
]

function getToKnowMe(question, answer){
  var reply = readlineSync.question(chalk.green(question));
    if(reply === answer){
    console.log("Right!!!!");
    score++;
    }
    else{
      console.log("Wrong!!!!!!!");
      score--;
    }

    // if(score === 0){
    //   console.log("you cant go forward beacuse your score is 0");
    //   break;
    // }

  console.log("Current Score is ",chalk.yellow(score));
  console.log("------------------------");
}

for(let i=0;i<questionaire.length;i++){
  getToKnowMe(questionaire[i].question, questionaire[i].answer);
}

for(let j=0;j<highScore.length;j++){
  if(highScore[j].score > score){
    console.log(chalk.magenta(highScore[j].name,"is winner"));
  }
  else{
    console.log(chalk.green("You are Winner"));
  }
}