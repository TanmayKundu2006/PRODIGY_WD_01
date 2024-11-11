const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissor"];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
rock.addEventListener("click", () => {
    const playerchoice="rock";
    const computerchoice=getComputerChoice();
    if(playerchoice==="rock" && computerchoice==="scissor")
    {
        alert("Player wins");
    }
    else if(playerchoice===computerchoice)
    {
        alert("its a draw");
    }
    else{
        alert("computer wins");
    }
})
paper.addEventListener("click", () => {
    const playerchoice="paper";
    const computerchoice=getComputerChoice();
    if(playerchoice==="paper" && computerchoice==="rock")
    {
        alert("Player wins");
    }
    else if(playerchoice===computerchoice)
    {
        alert("its a draw");
    }
    else{
        alert("computer wins");
    }
})
scissor.addEventListener("click", () => {
    const playerchoice="scissor";
    const computerchoice=getComputerChoice();
    if(playerchoice==="scissor" && computerchoice==="paper")
    {
        alert("Player wins");
    }
    else if(playerchoice===computerchoice)
    {
        alert("its a draw");
    }
    else{
        alert("computer wins");
    }
});
rock.addEventListener("mouseover", () => {
    rock.innerText="CLICK TO CHOOSE 👊 ROCK";
    rock.style.backgroundColor="brown";
});
rock.addEventListener("mouseout", () => {
    rock.innerText="👊 ROCK"
    rock.style.backgroundColor="yellow";
});
paper.addEventListener("mouseover", () => {
    paper.innerText="CLICK TO CHOOSE 🫲 PAPER";
    paper.style.backgroundColor="brown";
});
paper.addEventListener("mouseout", () => {
    paper.innerText="🫲 PAPER"
    paper.style.backgroundColor="yellow";
});
scissor.addEventListener("mouseover", () => {
    scissor.innerText="CLICK TO CHOOSE ✌️ SCISSOR";
    scissor.style.backgroundColor="brown";
});
scissor.addEventListener("mouseout", () => {
    scissor.innerText="✌️ SCISSOR"
    scissor.style.backgroundColor="yellow";
});
 
 