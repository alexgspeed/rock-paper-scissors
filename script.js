
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

        if (userGuess == computerGuess){
            ties++;
        content.textContent = `You and the computer both selected ${userGuess}. A tie!`;
        container.appendChild(content);
        }else if ((userGuess == 'scissors' && computerGuess == 'paper') || 
                (userGuess == 'rock' && computerGuess == 'scissors') || 
                (userGuess == 'paper' && computerGuess == 'rock') ){
            wins++;
            if (wins == 5){
                content.textContent =`That's 5 wins, you're the winner!!!`;
                container.appendChild(content);
            }else{
                content.textContent = `You chose ${userGuess} and the computer chose ${computerGuess}. You win!`;
                container.appendChild(content);
            }
        } else {losses++;
            if (losses == 5){
                content.textContent =`That's 5 losses, you're the loser!!!`;
                container.appendChild(content);
            }else{
                content.textContent = `You chose ${userGuess} and the computer chose ${computerGuess}. You lose!`;
                container.appendChild(content);
            }
        }
        scores.textContent = `Wins: ${wins} Losses: ${losses} Ties: ${ties}`;
        container.appendChild(scores);
        if(wins == 5 || losses == 5){
                ties = 0;
                wins = 0;
                losses =0;
        }
    
}

function myEventHandler(event){
    playGame(this.className,computerGenerate());
    this.classList.add('clicked');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',myEventHandler));
buttons.forEach(button => button.addEventListener('transitionend',removeTransition));

const container = document.querySelector('.middleRow');
const content = document.createElement('p');
const scores = document.createElement('p');

