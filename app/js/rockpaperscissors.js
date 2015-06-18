'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var playerMove;
    if (move !== null) {
        playerMove = move;
    }
    else {
        playerMove = getInput();
    }
    console.log('Player move is ' + playerMove);
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var computerMove;
    if (move !== null) {
        computerMove = move;
    }
    else {
        computerMove = randomPlay();
    }
    console.log('Computer move is ' + computerMove);
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    switch (playerMove) {
        case 'rock':
            if (computerMove == 'paper') {
                winner = 'computer';
                break;
            }
            else if (computerMove == 'scissors') {
                winner = 'player';
                break;
            }
            else {
                winner = 'tie';
                break;
            }
            break;

        case 'paper':
            if (computerMove == 'rock') {
                winner = 'player';
                break;
            }
            else if (computerMove == 'scissors') {
                winner = 'computer';
                break;
            }
            else {
                winner = 'tie';
                break;
            }
            break;

        case 'scissors':
            if (computerMove == 'rock') {
                winner = 'computer';
                break;
            }
            else if (computerMove == 'paper') {
                winner = 'player';
                break;
            }
            else {
                winner = 'tie';
                break;
            }
            break;

        default:
            winner = 'tie';

    }
    console.log("Winner is " + winner);
    return winner;
}

function playToFive() {


    console.log("Let's play Rock, Paper, Scissors");
    var winnerOfRound;
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */


    while (computerWins < 5 && playerWins < 5) {
        winnerOfRound = getWinner(getPlayerMove(null),getComputerMove(null));
        if (winnerOfRound == 'computer') {
            computerWins++;
            console.log('Computer wins: ' + computerWins);
        }
        if (winnerOfRound == 'player') {
            playerWins++;
            console.log('Player wins: ' + playerWins);
        }
        console.log();
    }

    return [playerWins, computerWins];

}

//Game starts here
playToFive();
