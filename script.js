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

function playRound(){
    const player=prompt("Enter your choice (Rock,Paper or Scissor?");
    const computerSelection=getComputerChoice();
    const playerSelection=player.toLowerCase();
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
         return "Enter a right choice";
    }    
}

function game(){
    let userPoints=0,computerPoints=0;
    for (let i = 0; i < 5; i++) {
        console.log("ROUND " +(i+1));
        const ans=playRound();
        console.log(ans);
        // console.log(playRound());
        if(ans.includes("Win")){
            userPoints+=1;
        }
        else if(ans.includes("Lose")){
            computerPoints+=1;
        }
        console.log("User :"+userPoints);
        console.log("Computer: "+computerPoints);

        
    }
    if(userPoints>computerPoints){
        console.log("user win by "+ userPoints +":"+computerPoints);
    }else{
        console.log("computer win by "+ userPoints + ":"+computerPoints);
    }
}
game();

// console.log(getComputerChoice());
// console.log(playRound(playerSelection.toLowerCase(),computerSelection));