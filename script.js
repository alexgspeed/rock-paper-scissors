
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
