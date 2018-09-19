var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "ABCDEFGHIJKLMNOPQRTSUVWXYZ"


ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);


function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}


document.onkeyup = function (event) {
      var playerGuess = event.key;

     
      if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            usedArray = [];

      }

      
      jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;
      }

      
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }

      
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {
            
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);
      }
      
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}

// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

// var wins = 0;
// var losses = 0;
// var ties = 0;

// var textDirections = document.getElementById("text-directions");
// var userChoicaText = document.getElementById("userchoice-directions");
// var computerChoiceText = document.getElementById ("computerchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
// var tiesText = document.getElementById("ties-text");

// document.onkeyup = function(event) {
//     var userGuess = event.key;
//     var computerGuess = computerChoices[Math.floor(math.random() * computerChoices.length)];

//     if (userGuess === computerGuess) {
//         wins++
//     }
//     else if (userGuess != computerGuess) {
//         losses++
//     }

// directionsText.textContent = "";

// userTextChoice.textContent = "You chose: " + userGuess;
// computerChoiceText.textContent = "Computer chose: " + computerGuess;
// winsText.textContent = "wins: " + wins;
// lossesText.textContent = "losses: " + losses;

// }

