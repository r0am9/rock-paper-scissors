let humanScore = 0;
let computerScore = 0;
let round = 0;
let gameover = false;

const choices = ["rock", "paper","scissors"]


function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let asnwer = prompt("paper, rock or scissors?").toLowerCase();
    
    return asnwer;
}

function playRound(humanChoice, computerChoice){

    // ShowResults("Round: "+ round + " Computer choice: " + computerChoice);
    // ShowResults("Round: "+ round + " Human choice: " + humanChoice);
    if(!gameover){
        switch(humanChoice + computerChoice){
            case "scissorspaper":
            case "rockscissors":
            case "paperrock":
                humanScore++;
                ShowResults("you win this round!");
                
                break;
            case "paperscissors":
            case "scissorsrock":
            case "rockpaper":
                computerScore++;
                ShowResults("you loose this round!");
                
            break;
            case "scissorsscissors":
            case "rockrock":
            case "paperpaper":
                ShowResults("It's a tie for this round!");
                
            break;
        }
        if(computerScore == 5 ){
            ShowResults("Computer wins the game");
            ShowResults("Human Score: " + humanScore + " Computer Score: " + computerScore);
            gameover = true;
        }else if(humanScore == 5){
            ShowResults("Stupid human wins the game");
            ShowResults("Human Score: " + humanScore + " Computer Score: " + computerScore);
            gameover = true;
        }

        round++;
    }
}

function endGame(){
    if(humanScore > computerScore)
        ShowResults("The winner of the game is: You, a simple human");
        
    else
        ShowResults("The winner of the game is: Me, a sexy smart Computer");
}

function playGame(playerSelection){

//const humanSelection = getHumanChoice();
const computerSelection =  getComputerChoice();

playRound(playerSelection, computerSelection);

}

function ShowResults(result){
    const resultP = document.createElement('p');
    resultP.textContent = result;
    divResults.appendChild(resultP);
}

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
document.body.appendChild(rockButton);

rockButton.addEventListener('click', event => {
    playGame('rock');
})

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
document.body.appendChild(paperButton);

paperButton.addEventListener('click', event => {
    playGame('paper');
})

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
document.body.appendChild(scissorsButton);

scissorsButton.addEventListener('click', event => {
    playGame('scissors');
})

const divResults = document.createElement('div');
document.body.appendChild(divResults);
   
// for (var i = 0; i < 5; i++) {
//     playGame();
// }
  
//endGame();

