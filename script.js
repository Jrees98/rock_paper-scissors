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


const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);
    outcomeOfGame.textContent = `The computer selected ${computerSelection}. ${outcome}!`

});

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);
    outcomeOfGame.textContent = `The computer selected ${computerSelection}. ${outcome}!`

});

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);
    outcomeOfGame.textContent = `The computer selected ${computerSelection}. ${outcome}!`

});









 
//main game loop plays game to 5 points

// function game() {
//     let player_score = 0
//     let computer_score = 0
//     while (player_score !== 5 && computer_score !== 5) {
//         let playerSelection = prompt().toLowerCase();
//         let computerSelection = getComputerChoice();
//         let outcome = playRound(playerSelection, computerSelection)
//         if (outcome === 'Player Wins'){
//             player_score ++
//         }
//         else if (outcome === "Tie") {

//         }
//         else {
//             computer_score ++
//         }
//         console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. ${outcome}` )
//         console.log(`Player score: ${player_score} Computer score: ${computer_score}`)
  

//     }
//     if (player_score === 5) {
//         console.log('You win!!!')
//     }
//     else {
//         console.log('Computer wins! You lose.')
//     }

    
// }

