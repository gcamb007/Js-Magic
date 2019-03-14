// Array for surfing words
const surfing = ["wave", "surfer", "beach", "sand", "wipeout",];

// Pick a random word
const word = surfing[Math.floor(Math.random() * surfing.length)];

// Set up the answer array
const playerAnswer = [];
for (var i = 0; i < word.length; i++) {
  playerAnswer[i] = "_";
}
const otherLetters = word.length;

// Loop
while (otherLetters > 0) {
  // Show progress
  alert(playerAnswer.join(" "));

  // Get player playerGuess
  const playerGuess = prompt("What's your playerGuess");

  if (playerGuess.length !== 1) {
    alert("Enter only a single letter.");
  } else {
    // Update game with the new entry
    for (var j = 0; j < word.length; j++) {
      if (word[j] === playerGuess) {
        playerAnswer[j] = playerGuess;
        otherLetters--;
      }
    }
  }
  // End of loop
}

// Show answer
alert(playerAnswer.join(" "));
alert("You win! The word was " + word);