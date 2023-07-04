function getComputerChoice () {
    let number = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if (number === 1) {
        computerSelection = 'Rock'
    }
    else if (number === 2) {
        computerSelection = 'Paper'
    }
    else if (number === 3) {
        computerSelection = 'Scissors'
    }
    return computerSelection
}


function playRound (playerSelection, computerSelection) {

    let outcome;

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        outcome = 'Player 1 Wins'
    }
    else if (playerSelection ==='paper' && computerSelection === 'rock') {
        outcome = 'Player 1 Wins'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        outcome = 'Player 1 Wins'
    }
    else if (playerSelection === computerSelection) {
        outcome = 'Tie'
    }
    else {
        outcome = 'Player 2 Wins'
    }
    return outcome
}

let playerSelection = prompt();
playerSelection.toLowerCase();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))
