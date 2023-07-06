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
    }
    else if (playerSelection ==='paper' && computerSelection === 'rock') {
        outcome = 'Player Wins'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        outcome = 'Player Wins'
    }
    else if (playerSelection === computerSelection) {
        outcome = 'Tie'
    }
    else {
        outcome = 'Computer Wins'
    }
    return outcome
 

//main game loop runs game up to 5 points
function game() {
    let player_score = 0
    let computer_score = 0
    while (player_score !== 5 && computer_score !== 5) {
        let playerSelection = prompt().toLowerCase();
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection)
        if (outcome === 'Player Wins'){
            player_score ++
        }
        else if (outcome === "Tie") {

        }
        else {
            computer_score ++
        }
        console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. ${outcome}` )
        console.log(`Player score: ${player_score} Computer score: ${computer_score}`)
  

    }
    if (player_score === 5) {
        console.log('You win!!!')
    }
    else {
        console.log('Computer wins! You lose.')
    }

    
}

game()
