let choiceArray = ["Rock", "Paper", "Scissors"];
let counter = 0;

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
         console.log("Stalemate!");
    } else if (playerSelection === 2 && computerSelection === 0 ){
        console.log(`You Lose! ${choiceArray[computerSelection]} beats ${choiceArray[playerSelection]}!`);
    } else if (playerSelection === 0 && computerSelection === 2) {
        counter += 1;
        console.log(`You Win! ${choiceArray[playerSelection]} beats ${choiceArray[computerSelection]}!`);
    } else if (playerSelection > computerSelection){
        counter += 1;
        console.log(`You Win! ${choiceArray[playerSelection]} beats ${choiceArray[computerSelection]}!`); 
    } else {
        console.log(`You Lose! ${choiceArray[computerSelection]} beats ${choiceArray[playerSelection]}!`);
    }
}

function game() {
  
    let playerChoice;
    let compChoice;
   
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Choose from Rock, Paper, or Scissors");
        let firstLetter = playerChoice.slice(0,1).toUpperCase();
        playerChoice = choiceArray.indexOf(firstLetter + playerChoice.substr(1).toLowerCase());
        compChoice = getComputerChoice();

        playRound(playerChoice, compChoice);
        
    }

    return `You won ${counter} times!`;
    
}