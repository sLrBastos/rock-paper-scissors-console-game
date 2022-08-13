let humanScore = 0;
let computerScore = 0;
let i=0;


function Game() {
    for (let i=0; i<5; i++) {
        let playerSelection = prompt(' Enter Rock, Paper, or Scissors');
        let computerSelection = computerPlay();
        let msg = Play(playerSelection, computerSelection);
        console.log(msg);
        if (playerSelection !== "rock" && "paper" && "scissors") {
            i--;
        } else {
            console.log('Current score: Human: ', humanScore, ' Computer: ', computerScore)
        }
    }
    console.log(winner());
}   

function computerPlay() {
    let number = Math.floor(Math.random() * (3 + 1));
    if (number == 1)
        return 'Rock';
    else if (number == 2)
        return 'Paper';
    else return 'Scissors';
}

function Play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        humanScore += 1;
        return playerSelection + ' wins vs ' + computerSelection + '. Congratulations!';
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        computerScore += 1;
        return playerSelection + ' loses vs ' + computerSelection + '. Try again!';
    } else if (playerSelection === 'ROCK' && computerSelection === 'ROCK') {
        return playerSelection + ' ties with ' + computerSelection + '. Try again!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        humanScore += 1;
        return playerSelection + ' wins vs ' + computerSelection + '. Congratulations!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
        return playerSelection + ' ties with ' + computerSelection + '. Try again!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        computerScore += 1;
        return playerSelection + ' loses vs ' + computerSelection + '. Try again!';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
        return playerSelection + ' ties with ' + computerSelection + '. Try again!';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        humanScore += 1;
        return playerSelection + ' wins vs ' + computerSelection + '. Congratulations!';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore += 1;
        return playerSelection + ' loses vs ' + computerSelection + '. Try again!';
    } else return 'Enter a valid move!';
}

function winner() {
    if (humanScore > computerScore) {
        return 'Player Wins! ' + humanScore + " " + "to" + " " + computerScore ;
    } else if (computerScore > humanScore) {
        return 'Computer wins! ' + computerScore + " " +"to" + " " + humanScore ;
    }
    else {
        return "Player and Computer ties: " + humanScore + " " + "to" + " "  + computerScore;
    }
}

Game();



        
