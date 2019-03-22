//create answer array
var answers = ["linus", "joecool", "charlesschulz", "woodstock", "olaf"];
//create array for gussed letters to be stored in
var guessedLetters = [];
//create an array for incorrect letters to be stored in
var incorrectLetters = [];
//create an array for correct letters to be stored in
var correctLetters = [];
//create an array for underscores based on the length of the string to be stored in
var underScore = [];
// maximum number of tries per word
const maxTries = 6;

// choose a random word from answers array and pass it into new array called correcAnswer
var correctAnswer = Array.from(answers[Math.floor(Math.random() * answers.length)]);
console.log(correctAnswer);


//Dom Manipulation
var docUnderScore = document.getElementById("underscore");

// push underscores into the spaces of each letter
generateUnderscore();
function generateUnderscore () {
    for (var i = 0; i < correctAnswer.length; i++) {
        underScore.push("_");
    }    
}

//obatin user guess
document.addEventListener('keyup', function (event) {
    // guessedLetters.push(event.key);
    var currentGuess = event.key;
    findMatchingLetter(currentGuess);
    });

//check if guess is right or wrong, take right or wrong guess and store in array
function findMatchingLetter(currentGuess) {
    // console.log(currentGuess);
    for (let i = 0; i < correctAnswer.length; i++) {
        // console.log(correctAnswer[i], currentGuess);
        if (correctAnswer[i] === currentGuess) {            
            break
        } else (correctAnswer[i] !== currentGuess) ;{
         console.log("not a match")
        }
    }
}



// String.join to switch back to string from array!
