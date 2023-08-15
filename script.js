const buttons=document.querySelectorAll(".user");
const container=document.querySelector(".container");

let userPoints=0,computerPoints=0;
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

// Disabled Function 
function disableBtn(){
    buttons.forEach(button=>{
        button.disabled=true;
    })
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

    if (playerSelection === computerSelection) {
        p.innerText = "It's a Tie";
        return "Tie";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        p.innerText = "You Win! " + playerSelection + " beats " + computerSelection;
        return "Win";
      } else {
        p.innerText =
          "You Lose! " + computerSelection + " beats " + playerSelection;
        return "Lose";
      }
}
    


function game(e){
        // console.log("ROUND " +(1));
        const ans=playRound(e);
        console.log(ans);
        
        // console.log(playRound());
        if(ans.includes("Win")){
            userPoints+=1;

        }
        else if(ans.includes("Lose")){
            computerPoints+=1;
        }
        p.innerHTML+=`<br>Player Score:${userPoints}<br>Computer Score:${computerPoints}`;
        console.log("User :"+userPoints);
        console.log("Computer: "+computerPoints);
        if(userPoints==5 || computerPoints==5){
            container.removeEventListener("click",game);
            p.innerText=(userPoints==5)?"You win the game!":"Computer win the game!";
            disableBtn();
            
        }
        
    }
    
// Take user Choice
container.addEventListener("click",game);
container.appendChild(p);

