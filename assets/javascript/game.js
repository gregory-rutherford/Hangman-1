var answers = ["linus", "joecool", "charlesschulz", "woodstock", "olaf"];
var correctAnswer = Array.from(answers[Math.floor(Math.random() * answers.length)]);
var guessedLetters = [];
console.log(correctAnswer);
var incorrectLetters = [];
var correctLetters = [];




document.addEventListener('keyup', function (event) {
    // guessedLetters.push(event.key);
    var currentGuess = event.key;
    findMatchingLetter(currentGuess);
    });


//loop through the string produced by correctAnswer and if a key matches a character 
//of the correctAnswer,
//display on blank line, else display on incorrect guesses div 

function findMatchingLetter(currentGuess) {
    // console.log(currentGuess);
    for (let i = 0; i < correctAnswer.length; i++) {
        console.log(correctAnswer[i], currentGuess);
        if (correctAnswer[i] === currentGuess) {
            correctLetters.push(currentGuess);
            //place the correct letter 
            break
        } 
        incorrectLetters.push(currentGuess);
    }
    console.log(answerIsCorrect);
}

//if current guess is equal to correct answer, take current guess and display 
// the guess, need to "lock" the guess so that it doesnt keep going or display
//it in the wrong guesses array

// String.join to switch back to string from array!
