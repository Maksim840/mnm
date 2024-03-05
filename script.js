

let compCounter = 0;
let userCounter = 0;


function updateCounters() {
    document.getElementById('user-counter').textContent = userCounter;
    document.getElementById('comp-counter').textContent = compCounter;
}

function updateUserChoice(choice) {
    let choiceText = "";
    if (choice === 1) {
        choiceText = "Rock";
    } else if (choice === 2) {
        choiceText = "Paper";
    } else if (choice === 3) {
        choiceText = "Scissors";
    }
    document.getElementById('user-choice').textContent = choiceText;
}

function updateCompChoice(choice) {
    let choiceText = "";
    if (choice === 1) {
        choiceText = "Rock";
    } else if (choice === 2) {
        choiceText = "Paper";
    } else if (choice === 3) {
        choiceText = "Scissors";
    }
    document.getElementById('comp-choice').textContent = choiceText;
}


function userChoice() {
    return new Promise(resolve => {
        let choice = 0;

        function onClickRock() {
            choice = 1;
            resolve(choice);
            updateUserChoice(choice);
        }

        function onClickPaper() {
            choice = 2;
            resolve(choice);
            updateUserChoice(choice);
        }

        function onClickScissors() {
            choice = 3;
            resolve(choice);
            updateUserChoice(choice);
        }

        document.querySelector('#rock').addEventListener('click', onClickRock);
        document.querySelector('#paper').addEventListener('click', onClickPaper);
        document.querySelector('#scissors').addEventListener('click', onClickScissors);
    });
}

function compChoice() {
    let compPlay = Math.floor(Math.random() * 3) + 1;
    if (compPlay === 1) {
        console.log("Computer chose Rock");
        updateCompChoice(compPlay);
    } else if (compPlay === 2) {
        console.log("Computer chose Paper");
        updateCompChoice(compPlay);
    } else {
        console.log("Computer chose Scissors");
        updateCompChoice(compPlay);
    }
    return compPlay;
}

async function check() {
    while (compCounter < 3 && userCounter < 3) {
        let userPlay = await userChoice();
        let compPlay = compChoice();

        if ((userPlay == 1 && compPlay == 2) || (userPlay == 2 && compPlay == 3) || (userPlay == 3 && compPlay == 1)) {
            compCounter++;
        } else if ((userPlay == 2 && compPlay == 1) || (userPlay == 3 && compPlay == 2) || (userPlay == 1 && compPlay == 3)) {
            userCounter++;
        }
        updateCounters();   
    }

    if (userCounter == 3) {
        alert("User Win");
    } else if (compCounter == 3) {
        alert("Computer Win");
    }
}

check();
