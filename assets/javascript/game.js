
// array of movies 
var movies = ['inception', 'interstellar', 'terminator', 'dunkirk', 'coherence', 'primer', 'predestination', 'unfriended'];

// randomly selected movie by computer
var computerGuess = '';

var lettersInComputerGuess = [];

// blanks and successes
var blanksAndSuccesses = [];

// number of blanks to be displayed
var numBlanks = 0;

// array of wrongly guessed letters
var wrongGuesses = [];

// array of letters already guessed
var lettersGuessed = [];

// global variables
var wins = 0;
var losses = 0;
var numGuesses = 9;

// start game function, initial conditions when the game starts
function startGame(){

    // refresh the counters to their initial values
    numGuesses = 9;
    wrongGuesses = [];
    blanksAndSuccesses = [];

    // selecting a random word from the movies array
    computerGuess = movies[Math.floor(Math.random() * movies.length)];
    console.log(computerGuess);

    // split the word into individual letters
    lettersInComputerGuess = computerGuess.split(' ');
    
    // calculating the number of blanks
    numBlanks = lettersInComputerGuess.length;

    // fill up the blanks and successes with blanks
    for(var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push('_');
    }   

    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('word-blanks').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(' ');f
}

// this function compares the letters typed by the user and match it with the computerGuess
// to check if the letter exists in the word or not
function checkLetters(letter){

    // this boolean will be toggled based on wheather or not 
    // a letter typed by the user is found anywhere in the word
    var letterInWord = false;

    // check if the letter exists inside the array at all
    for(var i=0; i<numBlanks; i++){

        if(computerGuess[i] === letter){

            // if the letter exists then toggle this boolean to true.
            letterInWord = true;
        }
    }

    // if the letter exists in the word, then find out exactly where
    if(letterInWord){   

        // loop through the word
        for(var j=0; j<numBlanks; j++){

            if(computerGuess[j] === letter){
                
                // here we set the specific blank spaces to equal the correct letter
                // when there is a match
                blanksAndSuccesses[j] = letter;
            }
        }

        // log the current blanksAndSuccesses for testing
        console.log(blanksAndSuccesses);
    }

    // if the letter does not exist in the word at all...
    else{

        // then we add the letter to the list of werong letters
        wrongGuesses.push(letter);

        // and deduct a life
        numGuesses--;
    }
}

// in this function we will have all the code that needs to be run
// after each guess is made.
function roundComplete(){

    
}

