// random word is choosen
var underScore = [];
var wrongGuess = [];
var randomWord;
var currentGuess;
var guessesRemaining = 5;
var wins = 0;
var losses = 0;

game();
function game() {
    writeToDom();
    keyHandler();
    wordGenerator();
    console.log(randomWord)

    generateUnderscore();
}
function keyHandler() {
    document.addEventListener("keyup", function (event) { 
        letterOrNumberCheck(event);
        wrongRight();
        writeToDom();
        winLose();
    });
}

function winLose() {
    if (underScore.includes("_") === false) {
        //   alert("YOU WIN!");
        wins++;
        document.getElementById("wins").textContent = wins;
        reset();
        // document.getElementById("youWin").textContent = "YOU WIN!";
        // setTimeout(reset, 3000);
    }
    if (guessesRemaining === 0) {
        losses++;
        document.getElementById("losses").textContent = losses;
        reset();
        //RESET TIME  
        // document.getElementById("youLose").textContent = "YOU LOSE. Try again please!";
        //     setTimeout(reset, 3000);
    }
}

function writeToDom() {
    document.getElementById("underscores").textContent = underScore.join(" ");
    document.getElementById("guessedletters").textContent = wrongGuess.join(" ");
    document.getElementById("guesses").textContent = guessesRemaining;

}

function wrongRight() {
    var correctGuess = false;
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === currentGuess) {
            underScore.splice(i, 1, currentGuess);
            correctGuess = true;
        }         
    }  
    if (correctGuess === false) {
        guessesRemaining--;
        wrongGuess.push(currentGuess);
        }
}

function letterOrNumberCheck(event) {
    if (event.keyCode >= 48 && event.keyCode <= 90) {
        currentGuess = event.key.toLowerCase();
    }
    else {
        alert("please enter a letter or number");
    }
}

function generateUnderscore() {
    for (var i = 0; i < randomWord.length; i++) {
        underScore.push("_");
    }
    document.getElementById("underscores").textContent = underScore.join(" ");

}


function wordGenerator() {
    var wordBank = ["linus", "lucy", "olaf", "woodstock"];
    randomWord = Array.from(wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase());
}

function reset() {
    document.getElementById("youLose").textContent = "";
    document.getElementById("youWin").textContent = "";
    document.getElementById("guessedletters").textContent = "";
    underScore = [];
    wrongGuess = [];
    guessesRemaining = 5;
    wordGenerator();
    generateUnderscore();
    writeToDom();
};

