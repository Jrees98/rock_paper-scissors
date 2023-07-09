const outcomeOfGame = document.querySelector('.outcome');
const playerPointsSelector = document.querySelector('.playerScore');
const computerPointsSelector = document.querySelector('.computerScore');
let playerPoints = 0
let computerPoints = 0

//generates a random number between 1 and 3 to select computer choice
function getComputerChoice () {
    let number = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if (number === 1) {
        computerSelection = 'rock'
    }
    else if (number === 2) {
        computerSelection = 'paper'
    }
    else if (number === 3) {
        computerSelection = 'scissors'
    }
    return computerSelection
}

//plays one round of RPS and returns the outcome player or computer wins
function playRound (playerSelection, computerSelection) {

    let outcome;

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        outcome = 'Player Wins'
        playerPoints +=1
        playerPointsSelector.textContent = `Player Score: ${playerPoints}`
    }
    else if (playerSelection ==='paper' && computerSelection === 'rock') {
        outcome = 'Player Wins'
        playerPoints +=1
        playerPointsSelector.textContent = `Player Score: ${playerPoints}`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        outcome = 'Player Wins'
        playerPoints +=1
        playerPointsSelector.textContent = `Player Score: ${playerPoints}`
    }
    else if (playerSelection === computerSelection) {
        outcome = 'Tie'
    }
    else {
        outcome = 'Computer Wins'
        computerPoints +=1
        computerPointsSelector.textContent = `Computer Score: ${computerPoints}`
    }
    return outcome

    
}

function checkWinner() {
    if (playerPoints === 5){
        playerPointsSelector.textContent = 'Player Score: 0'
        computerPointsSelector.textContent = 'Computer Score: 0'
        playerPoints = 0
        computerPoints = 0
        outcomeOfGame.textContent = 'You WIN!'
    }
    if (computerPoints ===5) {
        playerPointsSelector.textContent = 'Player Score: 0'
        computerPointsSelector.textContent = 'Computer Score: 0'
        playerPoints = 0
        computerPoints = 0
        outcomeOfGame.textContent = 'You lose :('
    }

}

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);
    outcomeOfGame.textContent = `The computer selected ${computerSelection}. ${outcome}!`
    checkWinner();

});

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);
    outcomeOfGame.textContent = `The computer selected ${computerSelection}. ${outcome}!`
    checkWinner();

});

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);
    outcomeOfGame.textContent = `The computer selected ${computerSelection}. ${outcome}!`
    checkWinner();

});
