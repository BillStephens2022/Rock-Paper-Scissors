const buttonDivEl = $('.button-div');
const yourPickEl = $('#your-pick');
const computerPickEl = $('#computer-pick');
const rpsArray = ['rock', 'paper', 'scissors'];

$(buttonDivEl).click(handleClick);

function handleClick(event) {
    let rps = event.target;
    if (rps.id === "rock") {
        yourPickEl.text('ROCK!');
    } else if (rps.id === "paper") {
        yourPickEl.text('PAPER!');
    } else if (rps.id === "scissors") {
        yourPickEl.text('SCISSORS!');
    } else {
        yourPickEl.text("click an actual button please!");
    };
}

function computerSelection() {
    computerPick = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    computerPickEl.text(computerPick);
    console.log(computerPick);
}


