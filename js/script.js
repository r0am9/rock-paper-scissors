let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    randomNumber = Math.random();
    if(randomNumber < 0.3){
        return "rock";
    }if(randomNumber < 0.6){
        return "paper";
    }else{
        return "scissors";
    }
}
console.log(getComputerChoice());


function getHumanChoice(){
    let asnwer = prompt("paper, rock or scissors?").toLowerCase();
    return asnwer;
}

function playRound(humanChoice, computerChoice){
    
    console.log(humanChoice + "Human Choice" + computerChoice + "Computer Choice");
    switch(humanChoice){
        case "paper": 
            switch(computerChoice){
                case "paper":
                    console.log("Tie!");
                    break;
                case "rock":
                    console.log("you win!");
                    break;
                case "scissors":
                    console.log("computer wins!");
                    break;
            }
            break;
        case "rock": 
            switch(computerChoice){
                case "paper":
                    console.log("computer wins!");
                    break;
                case "rock":
                    console.log("Tie!");
                    break;
                case "scissors":
                    console.log("you win!");
                    break;
            break;
        case "scissors": 
            switch(computerChoice){
                case "paper":
                    console.log("you win!");
                    break;
                case "rock":
                    console.log("computer wins!");
                    break;
                case "scissors":
                    console.log("Tie!");
                    break;
            break;
            }
    
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection =  getComputerChoice();

playRound(humanSelection, computerSelection);

