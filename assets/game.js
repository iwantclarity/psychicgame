

// Sets the computer choices 
var computerChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var historychoices =[];
var letDowns = ['Arent you sweet! That letter is not it!', 'Youre in denial cause that letter is not right, man', 'A Libra would of guessed that right', 'Alright baby cakes, that was wrong', 'Is there a new gentleman in your life, because he might of had the right answer.'];

// Declares the tallies to 0 
var wins = 0;
var losses = 0;
var guesses = 9;
var m = "Lets Begin...";

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


	// Check to make sure you did not already guess that letter




	if (historychoices.includes(userGuess) ) {
			var m = "While things don't always make sense, things happen for a reason. You picked the same letter again not even Miss Cleo knows why!";
	}

	// Making sure the user has guesses available
	else if (guesses > 1){


		// It tests to determine if the computer or the user won the round and then increments 
		if ((userGuess == computerGuess)){
			wins++;
			guesses = 9;
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			historychoices = [];
			var m = "Miss Cleo aleady saw you do it and knew you were going to guess it right.";

		}else if ((userGuess != computerGuess)){
			guesses--;
			historychoices.push(userGuess);


			m = letDowns[Math.floor(Math.random() * letDowns.length)];

		}


	

	}
	else {
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		guesses = 9;
		losses++;
		alert ("You Lose");
		historychoices = [];
		m = "Lets Begin..."
	}

		var html = "<h1>Pick a letter and see if you can guess which letter Miss Cleo is thinking!</h1>" +
		"<h2>Wins: " + 
		wins + 
		"</h2>" +
		"<h2>Losses: " + 
		losses + 
		"</h2>" +
		"<h2>Guesses Left: " + 
		guesses + 
		"</h2>" +
		"<h2>Letters Used: " + 
		historychoices + 
		"</h2>" +
		"<h2>" + 
		m + 
		"</h2>";

		// Placing the html into the game ID
		document.querySelector('#intro-message').innerHTML = html;

		

}
