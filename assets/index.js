
// HTML element variables
const buttonDivEl = $('.button-div');
const yourPickEl = $('#your-pick');
const computerPickEl = $('#computer-pick');
const winLossMessage = $('#win-loss-message');
const rockButton = $('#rock');
const paperButton = $('#paper');
const scissorsButton = $('#scissors');
const endGame = $('.end-game');
const playAgainButton = $('#play-again');
const winsEl = $('#wins');
const lossesEl = $('#losses');
const tiesEl = $('#ties');
const resetScoresButton = $('#reset-scores')

// other variables
const rpsArray = ['rock', 'paper', 'scissors'];
let yourPick;
let computerPick;
let computerPickImg;
let wins = 0;
let losses = 0;
let ties = 0;

//game initilization
init();

/* initialization - enables buttons so player can make choice, clears choices from previous game,
and empties win/loss messages.  Scoreboard is also updated based on values in local storage */
function init() {
    enableButtons();
    winLossMessage.empty();
    computerPickEl.empty();
    yourPickEl.empty();
    hidePlayAgainButton();
    getWins();
    getLosses();
    getTies();
}

/*-------------------Gameplay Functions----------------*/

/* function for player selection - once player makes a choice, choice will be rendered on page as an image,
buttons will be disabled, computer selection will be made, and results checked. */
function playerSelection(event) {
    let rps = event.target;
    if (rps.id === "rock") {
        yourPickEl.prepend('<img src="./assets/images/rock.png" alt="rock image" id="rock-img">');
        disableButtons();
        computerSelection();
        checkResult(rps.id);
    } else if (rps.id === "paper") {
        yourPickEl.prepend('<img src="./assets/images/paper.png" alt="paper image" id="paper-img">');
        disableButtons();
        computerSelection();
        checkResult(rps.id);
    } else if (rps.id === "scissors") {
        yourPickEl.prepend('<img src="./assets/images/scissors.png" alt="scissors image" id="scissors-img">');
        disableButtons();
        computerSelection();
        checkResult(rps.id);
    } else {
        yourPickEl.text("click an actual button please!");
    };
}

// function for random computer choice.  Computer choice will be rendered on the page as an image.
function computerSelection() {
    computerPick = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    computerPickImg = `./assets/images/${computerPick}.png`;
    computerPickEl.prepend(`<img src="${computerPickImg}" alt="${computerPick}" id="computer-pick-img">`);
}

/* function to check results to see whether player or computer won, or if it was a tie. Scores are
incremented and saved to local storage*/
function checkResult(yourPick) {
    if (yourPick === computerPick) {
        winLossMessage.text("It's a TIE!!");
        winLossMessage.css('color', 'yellow');
        ties++;
        setTies();
    } 
    else if (yourPick === 'rock' && computerPick === "scissors") {
        winLossMessage.text("Rock breaks scissors!  You WIN!!");
        winLossMessage.css('color', 'green');
        wins++;
        setWins();
    } else if (yourPick === 'rock' && computerPick === "paper") {
        winLossMessage.text("Paper covers Rock! You LOSE!!");
        winLossMessage.css('color', 'red');
        losses++;
        setLosses();
    } else if (yourPick === 'paper' && computerPick === "rock") {
        winLossMessage.text("Paper covers Rock! You WIN!!");
        winLossMessage.css('color', 'green');
        wins++
        setWins();
    } else if (yourPick === 'paper' && computerPick === 'scissors') {
        winLossMessage.text("Scissors cuts Paper!  You LOSE!!");
        winLossMessage.css('color', 'red');
        losses++;
        setLosses();
    } else if (yourPick === 'scissors' && computerPick === 'rock') {
        winLossMessage.text("Rock breaks Scissors! You LOSE!!");
        winLossMessage.css('color', 'red');
        losses++;
        setLosses();
    } else if (yourPick === 'scissors' && computerPick === 'paper') {
        winLossMessage.text("Scissors cuts Paper! You WIN!!");
        winLossMessage.css('color', 'green');
        wins++;
        setWins();
    }
    showPlayAgainButton();  //player is prompted to play again with a button
}

// disables user choice buttons after selection is made.
function disableButtons() {
    rockButton.prop('disabled', true);
    paperButton.prop('disabled', true);
    scissorsButton.prop('disabled', true);
}

// enables user choice buttons once init() is called. When player wants to play again, buttons will be enabled.
function enableButtons() {
    rockButton.prop('disabled', false);
    paperButton.prop('disabled', false);
    scissorsButton.prop('disabled', false);
}

// user is prompted with a button to play again.
function showPlayAgainButton() {
    playAgainButton.css('visibility', 'visible');
}

// play again button is hidden when game is started/re-started.
function hidePlayAgainButton() {
    playAgainButton.css('visibility', 'hidden');
}

/*-------------------Scoreboard Functions----------------*/

// function to get Wins from Local Storage
function getWins() {
    var storedWins = localStorage.getItem("wins");
    if (storedWins === null) {
        wins = 0;
    } else {
        wins = storedWins;
    };
    winsEl.text(wins);
}

// function to get Losses from Local Storage
function getLosses() {
    var storedLosses = localStorage.getItem("losses");
    if (storedLosses === null) {
        losses = 0;
    } else {
        losses = storedLosses;
    };
    lossesEl.text(losses);
}

// function to get Ties from Local Storage
function getTies() {
    var storedTies = localStorage.getItem("ties");
    if (storedTies === null) {
        ties = 0;
    } else {
        ties = storedTies;
    };
    tiesEl.text(ties);
}

// function to save wins to Local Storage
function setWins() {
    winsEl.textContent = wins;
    localStorage.setItem("wins", wins);
}

// function to save losses to Local Storage
function setLosses() {
    lossesEl.textContent = losses;
    localStorage.setItem("losses", losses);
}

// function to save ties to Local Storage
function setTies() {
    tiesEl.textContent = ties;
    localStorage.setItem("ties", ties);
}

// resets wins, losses, and ties to zero in Local Storage
function resetScores() {
    wins = 0;
    losses = 0;
    ties = 0;
    setWins();
    setLosses();
    setTies();
}

// Event listeners
$(buttonDivEl).click(playerSelection);
$(playAgainButton).click(init);
$(resetScoresButton).click(resetScores);