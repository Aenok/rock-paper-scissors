let choiceArray = ["Rock", "Paper", "Scissors"];
let resultDiv = document.getElementById("results");
let playerWins = 0;
let compWins = 0;

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection) {

    resultDiv.innerText = "";

    if(playerSelection === computerSelection) {
        resultDiv.innerText = "Stalemate!";
    } else if (playerSelection === 2 && computerSelection === 0 ){
        compWins += 1;
        resultDiv.innerText = `You Lose! ${choiceArray[computerSelection]} beats ${choiceArray[playerSelection]}!`;
    } else if (playerSelection === 0 && computerSelection === 2) {
        playerWins += 1;
        resultDiv.innerText = `You Win! ${choiceArray[playerSelection]} beats ${choiceArray[computerSelection]}!`;
    } else if (playerSelection > computerSelection){
        playerWins += 1;
        resultDiv.innerText = `You Win! ${choiceArray[playerSelection]} beats ${choiceArray[computerSelection]}!`; 
    } else {
        compWins += 1;
        resultDiv.innerText = `You Lose! ${choiceArray[computerSelection]} beats ${choiceArray[playerSelection]}!`;
    }
}

function game(playerChoice) {
  
    let compChoice;
    let buttons;
   


    // for (let i = 0; i < 5; i++) {
    //     playerChoice = prompt("Choose from Rock, Paper, or Scissors");
    //     let firstLetter = playerChoice.slice(0,1).toUpperCase();
    //     playerChoice = choiceArray.indexOf(firstLetter + playerChoice.substr(1).toLowerCase());
    compChoice = getComputerChoice();

    playRound(playerChoice, compChoice);
        
    // }



    if(playerWins === 5) {
        resultDiv.innerText = `You've won 5 times! You win everything~`;
    }

    if(compWins === 5) {
        resultDiv.innerText = `The computer won 5 times! You're a loser~`;
    }

    if (playerWins === 5 || compWins === 5) {
        buttons = document.querySelectorAll("button");
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
    
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => {
    game(0);
});

paperBtn.addEventListener("click", () => {
    game(1);
})

scissorBtn.addEventListener("click", () => {
    game(2);
})