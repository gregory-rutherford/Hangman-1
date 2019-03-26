// word bank
// pick random word
// display blank underscores based on legth of random word
// get user guess
//     if correct (compare at index value)
//         push into correct length of word
//      if incorrect

var wordBank = ["linus", "woodstock", "lucy", "olaf", "franklin"];
var guessedLetters = [];
var guessesRemaining = 8;
playGame();


//reset function
function reset() {
  //reset all variables --  
  //sets guesses remaining back to 5,
  guessesRemaining = 8;
  //clear the guessed letters array
  guessedLetters.length = 0;
  //calls game to play again and computer to pick a different random guess
  playGame();
}

//  ENCAPSULATE EVERYTHING IN A PLAYGAME FUNCTION AND THEN HAVE A RESET FUNCTION THAT CALLS THE PLAY GAME FUNCTION




function playGame() {
    // random guess
    var computerGuess = Array.from(
        wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase()
      );
      console.log(computerGuess);
  //create underscores
  var underScore = [];
  generateUnderscore();
  function generateUnderscore() {
    for (var i = 0; i < computerGuess.length; i++) {
      underScore.push("_");
    }
  }

  //receive user input
  document.onkeyup = function(event) {
    guessesRemaining--;
    document.getElementById("guesses").innerHTML = guessesRemaining;
    var userGuess = event.key;
    if (alphaOnly(event)) {
      checkGuess(userGuess.toLowerCase());
      // checkGuess2 (userGuess);
    }
    if (guessesRemaining === -1) {
      //add a timer so it isnt so sudden
      reset();
      alert("YOU LOSE!");
    }
  };

  //take user input and compare and see if the key matches any of the letters in the word

  function checkGuess(userGuess) {
    var index = computerGuess.indexOf(userGuess);
    if (computerGuess.indexOf(userGuess) !== -1) {
      while (index !== -1) {
        underScore.splice(index, 1, userGuess);
        computerGuess.splice(index, 1, null);
        document.getElementById("underscores").innerHTML = underScore.join(" ");
        index = computerGuess.indexOf(userGuess);
        if (computerGuess === null) {
            alert("you win");
        }
      }
    } //else push the userguess (key pressed) into the guessed letters array
    else {
      guessedLetters.push(userGuess);
      document.getElementById("guessedletters").innerHTML = guessedLetters;
    }
  }
  //only possible to enter letters of the alphabet
  function alphaOnly(event) {
    var key = event.keyCode;
    return (key >= 65 && key <= 90) || key == 8;
  }

  //DOM
  document.getElementById("underscores").innerHTML = underScore.join(" ");
  document.getElementById("guesses").innerHTML = guessesRemaining;
}
