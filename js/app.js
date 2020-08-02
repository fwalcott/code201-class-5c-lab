
var userName = prompt('Hello, My name is Felicia. What is your name?');
console.log(`Hello ${userName}Welcome to my about me page!!!`);
alert(`Hello ${userName}Welcome to my  about me page!!!`);

function q1() {
var questionOne = prompt(`${userName} Do I like spicy food? Yes or No`);
console.log(`${userName} Do I like spicy food? Yes or No`);
questionOne.toLowerCase();


if (questionOne !== 'yes' && questionOne === 'y') {
  console.log(`${userName} you are correct!`);
  alert(`${userName} you are correct!`);
} else {
  (questionOne === 'no' && questionOne === 'n');
  console.log(`${userName} Sorry but I do like spicy food`);
  alert(`${userName} Sorry but I do like spicy food`);
} 
}
q1();

function q2() {
}
var questionTwo = prompt(`${userName} Do I The Fast and the Furious Movies? Yes or No`);
console.log(`${userName} Do I The Fast and the Furious Movies? Yes or No`);
questionTwo.toLowerCase();

if (questionTwo !== 'yes' && questionTwo === 'y') {
  console.log(`${userName}you are correct!`);
  alert(`${userName}you are correct!`);
} else {
  (questionTwo === 'no' && questionTwo === 'n');
  console.log(`${userName}Sorry but I do! Even if they are insane!`);
  alert(`${userName}Sorry but I do! Even if they are insane!`);
}

q2();

function q3() {
var questionThree = prompt(`${userName}Am I in Gex X`);
console.log(`${userName}Am I in Gen X`);
questionThree.toLowerCase();

if (questionThree !== 'yes' && questionThree === 'y') {
  console.log(`${userName}Sorry! Gen Y forever!`);
  alert(`${userName}Sorry! Gen Y forever!`);
} else {
  (questionThree === 'no' && questionThree === 'n');
  console.log(`${userName}You Are Right!`);
  alert(`${userName}You Are Right!`);
}
} 

q3(); 

function q4() {

var questionFour = prompt(`${userName}Am I a Vegan?`);
console.log(`${userName}Am I a Vegan`);
questionFour.toLowerCase();

if (questionFour !== 'yes' && questionFour === 'y') {
  console.log(`${userName}Sorry! While I do eat vegan meals I am not vegan!`);
  alert(`${userName}Sorry! While I do eat vegan meals I am not vegan!`);
} else {
  (questionFour === 'no' && questionFour === 'n');
  console.log(`${userName}You Are Right!`);
  alert(`${userName}You Are Right!`);
}
}

q4();

function q5() {
var questionFive = prompt(`${userName}Have I watched every episode of Dragon Ball Z?`);
console.log(`${userName}Have I watched every episode of Dragon Ball Z?`);
questionFive.toLowerCase();

if (questionFive === 'yes' && questionFive === 'y') {
  console.log(`${userName}It/s over 9000!!!! Of Course!`);
  alert(`${userName}It/s over 9000!!!! Of Course!`);
} else {
  (questionFive === 'no' && questionFive === 'n');
  console.log(`${userName}Sorry. I have watched every episode of DBZ!`);
  alert(`${userName}Sorry. I have watched every episode of DBZ!`);
}
}

q5();  

function q6() {

var questionSix = prompt('What number am I thinking of?');

attempts = 4;
var correctNumber = 9;
var answeredCorrectly = false;
favoriteNumber = prompt('What number am I thinking of. It is between 1 and 20');

while (attempts > 0 &&!answeredCorrectly) {
  attempts--;
  if (questionSix > correctNumber && attempts > 0) {
    questionSix = parseInt(prompt(`Too high! You have ${guesses} guesses left.`));
  } else if (questionSix < correctNumber && attempts > 0) {
    questionSix = prompt(`Too low! You have ${guesses} guesses left.`);
  } else if (correctNumber === questionSix) {
    alert('Yes! You got it!');
    answeredCorrectly = true;
    correctAnswer++;
  }
}
if (attempts === 0 && !answeredCorrectly) {
  alert(`Almost... Correct answer was ${correctNumber}.`);
}
}
  
q6(); 
  
function q7() {

     var questionSeven = prompt('What is my favorite Film?');
     console.log(userName + 'What is my favorite Film?'); 
     questionSeven.toLowerCase();

    
      var filmArray = ['9 to 5', 'Casablanca', 'Do the Right Thing', 'American Pop'];
      var guesses = 6;
      var correctAnswer = false;
    
      while (guesses > 0 && !correctAnswer) {
        guesses--;
        console.log(guesses);
        for (var i = 0; i < filmArray.length; i++) {
          if (questionSeven === filmArray[i]) {
            alert(`The best films ever ${userName} are 9 t0 5 , Casablanca, Do the Right Thing and American Pop`);
            answer++;
            correctAnswer = true;
            i = filmArray.length;
          }
        }
        if (guesses > 0 && !co) {
          questionSeven = prompt(`Sorry, ${userName}. You have ${guesses} guesses left.`).toLowerCase();
        }
      }
      if (guesses === 0 && !correctAnswer) {
        alert(`Sorry but none of those was the best film ever ${userName}! The anwser is 9 t0 5 , Casablanca, Do the Right Thing and American Pop`);
      }
    } 
    q7();
    
    alert(`Thank you for playing my guessing game!`);

