'use strict'  


var userName = prompt('Hello, My name is Felicia. What is your name?'); 
console.log('Hello' + userName + 'Welcome to my about me page!!!'); 
alert('Hello' + userName + 'Welcome to my  about me page!!!'); 


var questionOne = prompt(userName  + 'Do I like spicy food? Yes or No'); 
console.log(userName + 'Do I like spicy food? Yes or No');  
questionOne.toLowerCase() 


if (questionOne !=='yes'  && questionOne ==='y'){
  console.log(userName  + 'you are correct!');
  alert(userName  + 'you are correct!');
} else { (questionOne ==='no' && questionOne ==='n') 
  console.log(userName  + 'Sorry but I do like spicy food'); 
  alert(userName + 'Sorry but I do like spicy food');
}

var questionTwo = prompt(userName  + 'Do I The Fast and the Furious Movies? Yes or No'); 
console.log(userName  + 'Do I The Fast and the Furious Movies? Yes or No'); 
questionTwo.toLowerCase()

if (questionTwo !=='yes'  && questionTwo ==='y') {
  console.log(userName  + 'you are correct!'); 
  alert(userName  + 'you are correct!');
} else { (questionTwo ==='no' && questionTwo ==='n')
  console.log(userName  + 'Sorry but I do! Even if they are insane!'); 
  alert(userName  + 'Sorry but I do! Even if they are insane!'); 
}



var questionThree = prompt(userName  + 'Am I in Gex X'); 
console.log(userName  + 'Am I in Gen X'); 
questionThree.toLowerCase()

if (questionThree !=='yes'  && questionThree ==='y') {
  console.log(userName  + 'Sorry! Gen Y forever!'); 
  alert(userName + 'Sorry! Gen Y forever!');
} else { (questionThree ==='no' && questionThree ==='n')
  console.log( userName  + 'You Are Right!'); 
  alert(userName  + 'You Are Right!'); 
} 


var questionFour = prompt(userName  + 'Am I a Vegan?'); 
console.log(userName  + 'Am I a Vegan'); 
questionFour.toLowerCase()

if (questionFour !=='yes'  && questionFour ==='y') {
  console.log(userName  + 'Sorry! While I do eat vegan meals I am not vegan!'); 
  alert(userName  + 'Sorry! While I do eat vegan meals I am not vegan!');
} else { (questionFour ==='no' && questionFour ==='n')
  console.log(userName  + 'You Are Right!');  
  alert(userName  + 'You Are Right!'); 
} 



var questionFive = prompt(userName  + 'Have I watched every episode of Dragon Ball Z?'); 
console.log(userName  + 'Have I watched every episode of Dragon Ball Z?'); 
questionFive.toLowerCase()

if (questionFive ==='yes' && questionFive ==='y') {
  console.log(userName  + 'It/s over 9000!!!! Of Course!');
  alert(userName  + 'It/s over 9000!!!! Of Course!');
} else { (questionFive ==='no' && questionFive ==='n')
  console.log(userName  + 'Sorry. I have watched every episode of DBZ!');  
  alert(userName + 'Sorry. I have watched every episode of DBZ!');  
}  

var userName = alert('I hope you like my page' +  userName);  



