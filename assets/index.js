const buttonDivEl = $('.button-div');
const yourPickEl = $('#your-pick');
const computerPickEl = $('#computer-pick');
const winLossMessage = $('#win-loss-message');
const rpsArray = ['rock', 'paper', 'scissors'];
const rockButton = $('#rock');
const paperButton = $('#paper');
const scissorsButton = $('#scissors');
const endGame = $('.end-game');
const playAgainButton = $('#play-again');
const winsEl = $('#wins');
const lossesEl = $('#losses');
const tiesEl = $('#ties');
const resetScoresButton = $('#reset-scores')
let yourPick;
let computerPick;
let computerPickImg;
let wins = 0;
let losses = 0;
let ties = 0;



$(buttonDivEl).click(playerSelection);
$(playAgainButton).click(init);
$(resetScoresButton).click(resetScores);

function playerSelection(event) {
    let rps = event.target;
    if (rps.id === "rock") {
        yourPickEl.prepend('<img src="./assets/images/rock.png" alt="rock image">');
        disableButtons();
        computerSelection();
        checkResult(rps.id);
    } else if (rps.id === "paper") {
        yourPickEl.prepend('<img src="./assets/images/paper.png" alt="paper image">');
        disableButtons();
        computerSelection();
        checkResult(rps.id);
    } else if (rps.id === "scissors") {
        yourPickEl.prepend('<img src="./assets/images/scissors.png" alt="scissors image">');
        disableButtons();
        computerSelection();
        checkResult(rps.id);
    } else {
        yourPickEl.text("click an actual button please!");
    };
}

function computerSelection() {
    computerPick = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    computerPickImg = `./assets/images/${computerPick}.png`;
    computerPickEl.prepend(`<img src="${computerPickImg}" alt="${computerPick}">`);
}

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
    showPlayAgainButton();
    
}

init();

function disableButtons() {
    rockButton.prop('disabled', true);
    paperButton.prop('disabled', true);
    scissorsButton.prop('disabled', true);
}

function enableButtons() {
    rockButton.prop('disabled', false);
    paperButton.prop('disabled', false);
    scissorsButton.prop('disabled', false);
}

function showPlayAgainButton() {
    playAgainButton.css('visibility', 'visible');
}

function hidePlayAgainButton() {
    playAgainButton.css('visibility', 'hidden');
}

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

function getWins() {
    var storedWins = localStorage.getItem("wins");
    if (storedWins === null) {
        wins = 0;
    } else {
        wins = storedWins;
    };
    winsEl.text(wins);
}

function getLosses() {
    var storedLosses = localStorage.getItem("losses");
    if (storedLosses === null) {
        losses = 0;
    } else {
        losses = storedLosses;
    };
    lossesEl.text(losses);
}

function getTies() {
    var storedTies = localStorage.getItem("ties");
    if (storedTies === null) {
        ties = 0;
    } else {
        ties = storedTies;
    };
    tiesEl.text(ties);
}

function setWins() {
    winsEl.textContent = wins;
    localStorage.setItem("wins", wins);
}

function setLosses() {
    lossesEl.textContent = losses;
    localStorage.setItem("losses", losses);
}

function setTies() {
    tiesEl.textContent = ties;
    localStorage.setItem("ties", ties);
}

function resetScores() {
    wins = 0;
    losses = 0;
    ties = 0;
    setWins();
    setLosses();
    setTies();
}



