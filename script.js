const btnRock=document.querySelector(".rock");
const btnPaper=document.querySelector(".paper");
const btnScissors=document.querySelector(".scissors");
const container=document.querySelector(".container");
// Take user Choice
container.addEventListener("click",playRound);
// Take computer choice
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
const p=document.createElement("p");



function playRound(e){
    // const player=prompt("Enter your choice (Rock,Paper or Scissor?");
    let playerSelection;
    if(e.target.classList.contains("rock")){
        playerSelection="rock";
    }
    else if(e.target.classList.contains("paper")){
        playerSelection="paper";
    }
    else if(e.target.classList.contains("scissors")){
        playerSelection="scissors";
    }
    
    const computerSelection=getComputerChoice(); 

    if(playerSelection==computerSelection){
        p.innerText="It's a Tie";
    }
    if(playerSelection=="rock"){
        if(computerSelection=="paper"){
            p.innerText="You Lose! Paper beats Rock";
        }
        p.innerText="You Win! Rock beats Scissors";
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            p.innerText="You Win! Paper beats Rock";
        }p.innerText= "You Lose! Scissors beats Paper";
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            p.innerText="You Lose! Rock beats Scissors";
        }p.innerText="You Win! Scissors beats Paper";
    }
    else{
        p.innerText="Enter a right choice";
    }    
}

container.appendChild(p);

// function game(){
//     let userPoints=0,computerPoints=0;
//     for (let i = 0; i < 5; i++) {
//         console.log("ROUND " +(i+1));
//         const ans=playRound();
//         console.log(ans);
//         // console.log(playRound());
//         if(ans.includes("Win")){
//             userPoints+=1;
//         }
//         else if(ans.includes("Lose")){
//             computerPoints+=1;
//         }
//         console.log("User :"+userPoints);
//         console.log("Computer: "+computerPoints);

        
//     }
//     if(userPoints>computerPoints){
//         console.log("user win by "+ userPoints +":"+computerPoints);
//     }else{
//         console.log("computer win by "+ userPoints + ":"+computerPoints);
//     }
// }
// game();
