const randomNumber = Math.floor(Math.random()*100)+1;
let attempts = 0;

function checkGuess(){

    // Grab the users guess from the input field
    // We'll grab the user's guess by retrieving the value entered by the user
    // in the input field using the document.getElementById() method
    // This is a core part of the DOM API in JavaScript and it lets us grab html elements
    // by their unique id attribute. In this case, document.getElementById("guessInput")
    // retrieves the input field with the attribute set to "guessInput".
    const userGuess = parseInt(document.getElementById("guessInput").value);

    // Check whether the guess is correct:
    if (userGuess === randomNumber){
        // If the guess is correct, display a message to the user
        // and change the background color of the body to green
        document.getElementById("message").innerHTML = "Congratulations! You guessed the number!";
        document.body.style.backgroundColor = "green";
    }
    else if (userGuess < randomNumber){
        document.getElementById('message').innerHTML = "Too low, baby! Try again...";
    }
    else {
        document.getElementById('message').innerHTML = "Too high, baby! Try again...";
    }

    // Increment the number of attempts
    attempts ++;

}