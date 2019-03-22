// random word is choosen
var wordBank = ["linus", "lucy", "olaf", "woodstock"];
var randomWord = Array.from(
    wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase()
);
console.log(randomWord);
var guessesRemaining = 5;
var wins = 0;
var losses = 0;

// each letter is represented by underscores. have the word but only display underscores until a correct letter is guessed
var underScore = [];
var wrongGuess = [];
generateUnderscore();
function generateUnderscore() {
    for (var i = 0; i < randomWord.length; i++) {
        underScore.push("_");
    }
}
document.getElementById("underscores").textContent = underScore.join(" ");
// user can enter a key, only a-z
document.addEventListener("keyup", function (event) {
    // guessedLetters.push(event.key);
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
    //DOM
    document.getElementById("underscores").textContent = underScore.join(" ");
    document.getElementById("guessedletters").textContent = wrongGuess.join(" ");
    document.getElementById("guesses").textContent = guessesRemaining;


    if (underScore.includes("_") === false) {
        alert("YOU WIN!");
        wins++;

    }

    if (guessesRemaining === 0) {
        alert("YOU LOSE!")
        losses++;
    }

});

