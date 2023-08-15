const divText = document.querySelector('.results') 
let playerScore = 0
let computerScore = 0
const computerScoreText = document.querySelector('.computerScore')
const playerScoreText = document.querySelector('.playerScore')


function getComputerChoice() {
    let choice = ''
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        choice = 'rock';
    } else if (number === 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    return choice
}

function playRound(playerSelection, computerSelection) {
    let result = ''
    let prefab = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`
    if (playerSelection === computerSelection) {
        result = `Tie! You both selected ${playerSelection}.`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        result = prefab
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        result = prefab
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = prefab
    } else {
        result = `You lose... You chose ${playerSelection} and the computer chose ${computerSelection}`
    }
    if (result.includes('win')) {
        playerScore++
        playerScoreText.textContent = `Player Score: ${playerScore}`
        computerScoreText.textContent = `Computer Score: ${computerScore}`
    } else {
        computerScore++
        playerScoreText.textContent = `Player Score: ${playerScore}`
        computerScoreText.textContent = `Computer Score: ${computerScore}`
    }
    return result

}

function game() { 
    let playerChoice = prompt('Pick rock/paper/scissors: ').toLowerCase();
    let computerChoice = getComputerChoice()
    let roundResult = playRound(playerChoice, computerChoice)
    console.log(roundResult)
    
}


const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'rock'
    let result = playRound(playerChoice, computerChoice)
    divText.textContent = result
    console.log(result)
    
}) 

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'paper';
    let result = playRound(playerChoice, computerChoice);
    divText.textContent = result
    console.log(result)
}) 

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'scissors';
    let result = playRound(playerChoice, computerChoice);
    divText.textContent = result
    console.log(result)
}) 