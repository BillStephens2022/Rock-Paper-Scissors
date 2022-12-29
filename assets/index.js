const buttonDivEl = $('.button-div');
const yourPickEl = $('#your-pick');
const computerPickEl = $('#computer-pick');
const rpsArray = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;

$(buttonDivEl).click(handleClick);

function handleClick(event) {
    let rps = event.target;
    if (rps.id === "rock") {
        yourPickEl.text('ROCK!');
        computerSelection();
        checkResult(rps.id);
    } else if (rps.id === "paper") {
        yourPickEl.text('PAPER!');
        computerSelection();
        checkResult(rps.id);
    } else if (rps.id === "scissors") {
        yourPickEl.text('SCISSORS!');
        computerSelection();
        checkResult(rps.id);
    } else {
        yourPickEl.text("click an actual button please!");
    };
}

function computerSelection() {
    computerPick = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    computerPickEl.text(computerPick.toUpperCase() + "!");
}

function checkResult(yourPick) {
    if (computerPick === yourPick) {
        console.log("it's a tie!");
    } 
    else if (yourPick === 'rock' && computerPick === "scissors") {
        console.log("Rock breaks scissors!  You WIN!!");
        wins++;
    } else if (yourPick === 'rock' && computerPick === "Paper") {
        console.log("Paper covers Rock! You LOSE!!");
        losses++;
    } else if (yourPick === 'paper' && computerPick === "rock") {
        console.log("Paper covers Rock! You WIN!!");
        wins++
    } else if (yourPick === 'paper' && computerPick === 'scissors') {
        console.log("Scissors cuts Paper!  You LOSE!!");
        losses++;
    } else if (yourPick === 'scissors' && computerPick === 'rock') {
        console.log("Rock breaks Scissors! You LOSE!!");
        losses++;
    } else if (yourPick === 'scissors' && computerPick === 'paper') {
        console.log("Scissors cuts Paper! You WIN!!");
        wins++;
    }
}

