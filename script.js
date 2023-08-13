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
        result = `You both selected ${playerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        result = prefab
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        result = prefab
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = prefab
    } else {
        result = `You lose... You chose ${playerSelection} and the computer chose ${computerSelection}`
    }
    return result
}

function game() { 
    let playerChoice = prompt('Pick rock/paper/scissors: ').toLowerCase();
    let computerChoice = getComputerChoice()
    let roundResult = playRound(playerChoice, computerChoice)
    console.log(roundResult)
    
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    alert("You chose rock")