var guessesRemaining = 5;
var wins = 0;
var losses = 0;
var underScore = [];
var wrongGuess = [];
var randomWord;
var wordBank;


function newGame() {
    
    wordBank = ["linus", "lucy", "olaf", "woodstock"];
     randomWord = Array.from(
        wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase()
    );

    for (var i = 0; i < randomWord.length; i++) {
        underScore.push("_");
    };
    
    document.getElementById("underscores").textContent = underScore.join(" ");
    playGame();
}


function playGame() {
document.addEventListener("keyup", function (event) {
    if (event.keyCode >= 48 && event.keyCode <= 90) {
        var currentGuess = event.key.toLowerCase();
    } else {
        alert("please enter a letter or number");
    }

    var incorrect = true;
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === currentGuess) {
            underScore.splice(i, 1, currentGuess);
            incorrect = false;
        }
    }
    if (incorrect === true) {
        wrongGuess.push(currentGuess);
        guessesRemaining--;
    }

    document.getElementById("guessedletters").textContent = wrongGuess.join(" ");
    document.getElementById("guesses").textContent = guessesRemaining;


    if (underScore.includes("_") === false) {
        alert("YOU WIN!");
        wins++;
        setTimeout(newGame, 3000);
    }

    if (guessesRemaining === 0) {
        alert("YOU LOSE!");
        losses++;
        setTimeout(newGame, 3000);
    }

});
}
