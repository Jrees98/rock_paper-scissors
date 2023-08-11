function getComputerChoice() {
    let choice = ''
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        choice = 'Rock';
    } else if (number === 2) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }

    return choice
}


