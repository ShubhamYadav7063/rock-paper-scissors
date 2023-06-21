let rock = document.getElementById('option-1')
let paper = document.getElementById('option-2')
let scissors = document.getElementById('option-3')
let main = document.getElementsByClassName('main')

let playerScore = 0
let computerScore = 0

let buttons = document.querySelectorAll('button')

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

// disables the buttons after the completion of game
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
//    ----------------


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    console.log('computer choice is ' + Math.floor(Math.random() * 3))
    return choices[Math.floor(Math.random() * 3)]

}


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = ''
    // let section = document.createElement('section');


    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }
    document.getElementById('results').classList.add('result')
    document.getElementById('results').innerHTML = result
    return
}

