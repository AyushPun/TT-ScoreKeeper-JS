//Player 1 array
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

//Player 2 array
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3; //Default winning score
let isGameOver = false; //Game over variable

//Will update Scores
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;  //Game over - parent condition false
            //Change color
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            //Button disabled
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

//Update Scores Calling
p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

//Changing winning score select
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

//Calling reset when click reset
resetButton.addEventListener('click', reset)

//Resetting
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;    //Score became 0
        p.display.textContent = 0;  //Display 0 
        p.display.classList.remove('has-text-success', 'has-text-danger');  //Reset Color
        p.button.disabled = false;  //Button undisabled
    }
}
