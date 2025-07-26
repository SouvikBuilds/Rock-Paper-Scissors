document.addEventListener("DOMContentLoaded", function () {
    const rockDiv = document.getElementById("rock");
    const paperDiv = document.getElementById("paper");
    const scissorsDiv = document.getElementById("scissors");

    const choices = ["rock", "paper", "scissors"];



    let win = 0;
    let draw = 0;
    let loose = 0;

    const resultStatement = document.querySelector(".resultStatement");
    const winDiv = document.getElementById("win");
    const looseDiv = document.getElementById("loose");
    const drawDiv = document.getElementById("draw");
    const victorySound = new Audio('victory.mp3')
    const looseSound = new Audio('gameOver.mp3')
    const drawSound = new Audio('drawSound.mp3')
    const musicSound = new Audio('music.mp3')

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function check(userChoice) {
        const computerChoice = getComputerChoice();


        if (userChoice === computerChoice) {
            draw++;
            resultStatement.innerHTML = `<p>You Chose ${userChoice} and Computer Chose ${computerChoice}. It's a Draw!</p>`;
            drawDiv.innerHTML = `${draw}`;
            drawSound.currentTime = 0;
            drawSound.play();
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            win++;
            resultStatement.innerHTML = `<p>You Win! ${userChoice} beats ${computerChoice}</p>`;
            winDiv.innerHTML = `${win}`;
            victorySound.currentTime = 0;
            victorySound.play()
        } else {
            loose++;
            resultStatement.innerHTML = `<p>You Lose! ${computerChoice} beats ${userChoice}</p>`;
            looseDiv.innerHTML = `${loose}`;
            looseSound.currentTime = 0
            looseSound.play()
        }
    }

    rockDiv.addEventListener("click", () => check("rock"));
    paperDiv.addEventListener("click", () => check("paper"));
    scissorsDiv.addEventListener("click", () => check("scissors"));


});
