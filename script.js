const divText = document.querySelector('.results') 
let playerScore = 0
let computerScore = 0
const computerScoreText = document.querySelector('.computerScore')
const playerScoreText = document.querySelector('.playerScore')
const winnerPick = document.querySelector('.winner')
const resetButton = document.querySelector('.resetButton')
const playerChoiceDOM = document.querySelector('.playerChoice')
const computerChoiceDOM = document.querySelector('.computerChoice')
const resultText = document.querySelector('.result_text')

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
    let prefab = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`
    if (playerSelection === computerSelection) {
        result = `Tie! You both selected ${playerSelection}.`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        result = prefab
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        result = prefab
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = prefab
    } else {
        result = `You lose... You chose ${playerSelection} and the computer chose ${computerSelection}.`
    }
    if (result.includes('win')) {
        playerScore++
        playerScoreText.textContent = `Player Score: ${playerScore}`
        computerScoreText.textContent = `Computer Score: ${computerScore}`
    } else if (result.includes('lose')){
        computerScore++
        playerScoreText.textContent = `Player Score: ${playerScore}`
        computerScoreText.textContent = `Computer Score: ${computerScore}`
    } else {

    }
    return result

}

function checkScore(){
    if (playerScore === 5) {
        winnerPick.textContent = 'You win! To play again, select another option!'
        playerScore = 0
        computerScore = 0
        playerScoreText.textContent = `Player Score: ${playerScore}`
        computerScoreText.textContent = `Computer Score: ${computerScore}`

    }
    if (computerScore === 5) {
        winnerPick.textContent = 'You lose... To play again, select another option!'
        playerScore = 0
        computerScore = 0
        playerScoreText.textContent = `Player Score: ${playerScore}`
        computerScoreText.textContent = `Computer Score: ${computerScore}`
    }

}

function convertToEmoji(computerChoice) {
    if (computerChoice === 'rock'){
        emoji = '✊'
    } else if(computerChoice === 'paper') {
        emoji = '✋'
    } else{
        emoji = '✌️'
    }
    return emoji
}


const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'rock';
    let result = playRound(playerChoice, computerChoice);
    let compEmoji = convertToEmoji(computerChoice)
    playerChoiceDOM.textContent = '✊';
    computerChoiceDOM.textContent = compEmoji
    resultText.textContent = result
    checkScore();
});


const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'paper';
    let result = playRound(playerChoice, computerChoice);
    let compEmoji = convertToEmoji(computerChoice)
    playerChoiceDOM.textContent = '✋';
    computerChoiceDOM.textContent = compEmoji
    resultText.textContent = result
    checkScore()
}) 

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'scissors';
    let result = playRound(playerChoice, computerChoice);
    let compEmoji = convertToEmoji(computerChoice)
    playerChoiceDOM.textContent = '✌️';
    computerChoiceDOM.textContent = compEmoji
        resultText.textContent = result
    checkScore()
}) 

resetButton.addEventListener('click', () => {
    playerScore = 0
    computerScore = 0
    playerScoreText.textContent = `Player Score: ${playerScore}`
    computerScoreText.textContent = `Computer Score: ${computerScore}`
})

