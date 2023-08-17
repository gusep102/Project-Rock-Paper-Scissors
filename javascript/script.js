function getComputerChoice() {
    // select a random number between 1 and 3
    let compSelection = Math.floor(Math.random() * 3) + 1;
    // 1 is rock
    // 2 is paper
    // 3 is scissors
    if (compSelection === 1) {
        return 'rock';
    } else if (compSelection === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
    // return the choice to the function
}


function playRound(playerSelection, computerSelection) {
    // lowercase playerSelection for simpler comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // console.log(playerSelection);
    // console.log(computerSelection);

    // compare playerSelection and computerSelection
    // rock beats scissors
    // paper beats rock
    // scissors beats paper
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            // playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
            // computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            // playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
            // computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            // playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
            // computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if ( playerSelection == computerSelection){
            // playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
            // computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            return `Tie! ${playerSelection} is the same as ${computerSelection}`
        } else {
            // playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
            // computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else {
        return 'invalid input';
    }

    
  }

// calculate final score and winner of the match
function whoWon(computerWinCounter, playerWinCounter) {
    if (computerWinCounter == playerWinCounter) {
        console.log(`Its a tie!`);
    } else if (computerWinCounter > playerWinCounter) {
        console.log(`Computer Wins!`);
    } else {
        console.log(`Player Wins!`);
    }
    
}
//   play 5 rounds of the game while keeping track of who wins best out of 5
function game(){
    //keep track of wins
    let computerWinCounter = 0;
    let playerWinCounter = 0;

    for (let index = 0; index < 5; index++) {
    // get the input from the user
    let playerSelection = prompt("Rock, Paper, or Scissors?",'');
    // get the computer input
    let computerSelection = getComputerChoice();
    // play a round
    let winner = playRound(playerSelection, computerSelection);
    // report winner

    console.log(winner);

    if (winner == `Tie! ${playerSelection} is the same as ${computerSelection}`) {
        computerWinCounter++;
        playerWinCounter++;
        console.log(`Current scores Player: ${playerWinCounter} Computer: ${computerWinCounter}`);
    } else if (winner == `You Win! ${playerSelection} beats ${computerSelection}`) {
        playerWinCounter++;
        console.log(`Current scores Player: ${playerWinCounter} Computer: ${computerWinCounter}`);
    } else {
        computerWinCounter++;
        console.log(`Current scores Player: ${playerWinCounter} Computer: ${computerWinCounter}`);
    }

    }

    whoWon(computerWinCounter, playerWinCounter);
}


// main
// console.log(computerHand);
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
game();
// console.log(playRound(playerSelection, computerSelection));