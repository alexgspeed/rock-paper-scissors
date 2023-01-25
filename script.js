
//function that accepts user input
//generate rock, paper, or scissors for computer
//variable for computer, variable for user
//compare the variables, declare winner
//check for incorrect input
//check for a tie

let computerGuess;
let userGuess;
let wins = 0;
let ties = 0;
let losses = 0;

function newGame(){
    wins = 0, ties =0, losses = 0;
    for(let i = 1; i <= 5; i++){
    userGuess = prompt('Select rock, paper, or scissors.');
    computerGenerate();
    console.log(`Round ${i}: ` + playGame(userGuess,computerGuess)
    + `\n Wins: ${wins} Losses: ${losses} Ties: ${ties}`);}
}

function computerGenerate(){
   computerGuess = Math.floor(Math.random()*3)+1;
   switch(computerGuess){
    case 1: computerGuess = 'rock'; break;
    case 2: computerGuess = 'paper'; break;
    case 3: computerGuess = 'scissors'; break;
   }
   return computerGuess;
}

function playGame(userGuess,computerGuess){
    userGuess = userGuess.toLowerCase();
    if (!(userGuess == 'rock' || userGuess == 'paper' || userGuess == 'scissors')){ 
        return ('You need to type rock, paper, or scissors');
    }else if (userGuess == computerGuess){
        ties++;
       return (`You and the computer both selected ${userGuess}. A tie!`);
    }else if ((userGuess == 'scissors' && computerGuess == 'paper') || 
              (userGuess == 'rock' && computerGuess == 'scissors') || 
              (userGuess == 'paper' && computerGuess == 'rock') ){
        wins++;
        return (`You chose ${userGuess} and the computer chose ${computerGuess}. You win!`);
    } else {losses++; 
        return (`You chose ${userGuess} and the computer chose ${computerGuess}. You lose!`);}

}

function outputEvens(){
    for (let i = 0; i <=10; i++){
        if(i%2 != 0){continue;}
        else{console.log(i);}
    }
}

function numberPrompt(){
    let keepGoing = true;

    while (keepGoing){
        let input = prompt('Enter a number greater than 100','');
        if (input>100) keepGoing=0;
        else if (!input) break;
    }

}


let test;

function isPrime(test){
    outer: for (let outerP = 0;outerP<=test;outerP++ ){
        inner: for (let p = 2; p <= outerP; p++){
            if(outerP % p == 0 && outerP != p){break;}
            else if(outerP == p) {console.log(outerP)};
            }
        }
    }


function removeFromArray() {
        let inputArray = arguments[0];
        let argumentsCount = arguments.length;
        console.log('Arguments Count '+ argumentsCount);
        console.log(inputArray);

        for(i = argumentsCount-1; i > 0; i--){
            console.log(inputArray.indexOf(arguments[i]));

        }
               // for(i = arguments.length; i > 0; i--){
         //  let removal = inputArray.indexOf(arguments[i]);
          // inputArray.splice(removal,1);
       // }
};

function palindromes (input){
    let lcInput = input.toLowerCase();
    let noPunct = lcInput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
    let noPunctLength = noPunct.length;
    let outPut = false;
    console.log(noPunct.charAt(noPunctLength));
 
    if (noPunctLength%2 == 0){
     for (let i = 0; i <= (noPunctLength/2); i++){
         if(noPunct.charAt(i)==noPunct.charAt(noPunctLength-1)){
             noPunctLength--;
             outPut = true;
             continue;
         }
        else{ outPut = false;
         break;}
     }
  }
 
    else{
         for (let i = 0; i <= Math.floor((noPunctLength/2)); i++){
         if(noPunct.charAt(i)==noPunct.charAt(noPunctLength-1)){
         noPunctLength--;
         outPut = true;
         continue;
         }
         else {outPut = false;
         break;}
         }
     }
    
 
    return outPut;
 
 };

 const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];

  function reverseString(string){
    return string.split('').reverse().join('');
  }


  const fruits = ['apples','bananas','grapes'];