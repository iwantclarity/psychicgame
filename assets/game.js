

// Sets the computer choices 
var computerChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var historychoices =[];

// Declares the tallies to 0 
var wins = 0;
var losses = 0;
var guesses = 9;
var m = "How are you today?";

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


	// Check to make sure you did not already guess that letter




	if (historychoices.includes(userGuess) ) {
			alert ("While things don't always make sense, things happen for a reason. You picked the same letter again not even Miss Cleo knows why!");
	}

	// Making sure the user has guesses available
	else if (guesses > 1){


		// It tests to determine if the computer or the user won the round and then increments 
		if ((userGuess == computerGuess)){
			wins++;
			guesses = 9;
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			historychoices = [];

		}else if ((userGuess != computerGuess)){
			guesses--;
			historychoices.push(userGuess);
			me = "Arent you sweet!";

		}


	

	}
	else {
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		guesses = 9;
		losses++;
		alert ("You Lose");
		historychoices = [];
	}

		var html = "<h1>Pick a letter and see if you can guess which letter Miss Cleo is thinking!</h1>" +
		"<h2>wins: " + 
		wins + 
		"</h2>" +
		"<h2>losses: " + 
		losses + 
		"</h2>" +
		"<h2>Guesses Left: " + 
		guesses + 
		"</h2>" +
		"<h2>Letters Used: " + 
		historychoices + 
		"</h2>"
		"<h2>" + 
		m + 
		"</h2>";

		// Placing the html into the game ID
		document.querySelector('#intro-message').innerHTML = html;

		

}
