function getComputerChoice(){
    const randomNo=Math.random();
    if(randomNo<0.33){
        return "rock";
    }
    else if(randomNo<0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection){
    console.log("User: "+ playerSelection);
    console.log("Computer:"+computerSelection);
    if(playerSelection==computerSelection){
        return "It's a tie";
    }
    if(playerSelection=="rock"){
        if(computerSelection=="paper"){
            return "You Lose! Paper beats Rock";
        }
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            return "You Win! Paper beats Rock";
        }return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            return "You Lose! Rock beats Scissors";
        }return "You Win! Scissors beats Paper";
    }
    else{
         console.log("Enter a valid Choice!");
    }    
}

const playerSelection=prompt("Enter your choice (Rock,Paper or Scissor?");
const computerSelection=getComputerChoice();
// console.log(getComputerChoice());
console.log(playRound(playerSelection.toLowerCase(),computerSelection));