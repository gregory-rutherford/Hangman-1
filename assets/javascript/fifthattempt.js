var wordBank = [
    "linus",
     "lucy", 
     "olaf", 
     "woodstock",
     "pigpen"
    ];
var randomWord;
var answer;
var wins = 0;
var losses = 0;
var guessedLetters =[];
var guessesRemaining;

function disableKeys() {
    document.onkeyup = function(e) {
      return false;
    };
  }
  function enableKeys() {
    document.onkeyup = function(e) {
      return true;
    };
  }

function reset(event) {
    playGame();
    randomWord = Array.from(wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase()
    );
    answer = [];
    guessedLetters = [];
    guessesRemaining = 6;
    console.log(randomWord);
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === " ") {
        answer.push(" ");
        } else {
            answer.push("_")
        }
    }
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("answer").textContent = answer.join("");
    document.getElementById("guesses").textContent = guessesRemaining;
    document.getElementById("guessedletters").textContent = guessedLetters.join(",");
}
function playGame() {
    document.onkeyup = function(event) {
        if (event.keyCode >= 48 && event.keyCode <=90) {
            var userGuess = event.key.toLowerCase();
        }
        var check = false;
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userGuess) {
                answer[i] = randomWord[i];
                check = true;
            }
        }
        if (
            check === false && !guessedLetters.includes(userGuess)
            && event.keyCode >= 48 && event.keyCode <= 90)
            {
                guessedLetters.push(userGuess);
                guessesRemaining--;
            }
            if (guessesRemaining < 0) {
                losses++;
                document.getElementById("youWin").textContent = "You lose!";
                disableKeys();
                guessesRemaining = 0;
                setTimeout(reset, 2000);
            }
            if (answer.join("") === randomWord) {
                wins++;
                document.getElementById("youWin").textContent("You Win. Congrats!");
                disableKeys();
                setTimeout(reset, 2000);
            }

            document.getElementById("answer").textContent = answer.join("");
            document.getElementById("guessedletters").innerHTML = guessedLetters.join(", ");
            document.getElementById("guesses").innerHTML = guessesRemaining;
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("losses").textContent = losses;
    }
}

document.addEventListener("DOMContentLoaded", reset);




