let humanScore = 0;
let computerScore = 0;
let round = 0;

const choices = ["rock", "paper","scissors"]


function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let asnwer = prompt("paper, rock or scissors?").toLowerCase();
    
    return asnwer;
}

function playRound(humanChoice, computerChoice){
    console.log("Round: "+ round + " Computer choice " + computerChoice);
    console.log("Round: "+ round + " Human choice " + humanChoice);
    switch(humanChoice + computerChoice){
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            console.log("you win this round!");
            humanScore++;
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            console.log("you loose this round!");
            computerScore++;
        break;
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            console.log("It's a tie for this round!");
        break;
    }   
}

function endGame(){
    if(humanScore > computerScore)
        console.log("The winner of the game is: You, a simple human");
    else
        console.log("The winner of the game is: Me, a sexy smart Computer")
}

function playGame(){

const humanSelection = getHumanChoice();
const computerSelection =  getComputerChoice();

playRound(humanSelection, computerSelection);

}
   
for (var i = 0; i < 5; i++) {
    playGame();
}
  
endGame();

