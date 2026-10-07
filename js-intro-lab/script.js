// ---------------------------------------------------------------------------
// 1. Temperature Converter
// ---------------------------------------------------------------------------
function convertTemperature() {
  const fahrenheit = Number(document.getElementById("fahrenheit").value);
  const output = document.getElementById("celsiusOutput");

  // YOU FILL IN HERE
  // Convert fahrenheit to celsius:  (F - 32) * 5/9
  // Put the answer into output.textContent
}

// ---------------------------------------------------------------------------
// 2. Number Guessing Game
// ---------------------------------------------------------------------------
// This is set once when the page loads, and again when New Game is clicked.
let secretNumber = Math.floor(Math.random() * 100);

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  const output = document.getElementById("guessOutput");

  // YOU FILL IN HERE
  // Compare guess to secretNumber and say "Too high", "Too low", or "Correct!"
  // You will need an if / else if / else.
}

function newGame() {
  secretNumber = Math.floor(Math.random() * 100);
  document.getElementById("guessOutput").textContent = "New number picked. Guess away.";
}

// ---------------------------------------------------------------------------
// 3. Even or Odd
// ---------------------------------------------------------------------------
function checkEvenOdd() {
  const number = Number(document.getElementById("evenOddInput").value);
  const output = document.getElementById("evenOddOutput");

  // YOU FILL IN HERE
  // A number is even when dividing it by 2 leaves no remainder.
  // The remainder operator is %   ->   10 % 2 is 0, and 7 % 2 is 1.
}

// ---------------------------------------------------------------------------
// 4. Word Reverser
// ---------------------------------------------------------------------------
function reverseWord() {
  const text = document.getElementById("wordInput").value;
  const output = document.getElementById("reverseOutput");

  // YOU FILL IN HERE
  // Reverse the characters in text.
  // Hint: a string can become an array with .split(""), arrays have .reverse(),
  // and an array can become a string again with .join("").
}

// ---------------------------------------------------------------------------
// 5. Simple Adder
// ---------------------------------------------------------------------------
function addNumbers() {
  const first = document.getElementById("addend1").value;
  const second = document.getElementById("addend2").value;
  const output = document.getElementById("addOutput");

  // YOU FILL IN HERE
  // Careful: .value gives you STRINGS, so "2" + "3" is "23", not 5.
  // Turn them into numbers first with Number(...).
}

// ---------------------------------------------------------------------------
// Wiring. Nothing to fill in here, but read it — each line says "when this
// button is clicked, run this function". We pass the function by name, with
// no parentheses; adding () would run it immediately instead of on the click.
// ---------------------------------------------------------------------------
document.getElementById("convertButton").addEventListener("click", convertTemperature);
document.getElementById("guessButton").addEventListener("click", checkGuess);
document.getElementById("newGameButton").addEventListener("click", newGame);
document.getElementById("evenOddButton").addEventListener("click", checkEvenOdd);
document.getElementById("reverseButton").addEventListener("click", reverseWord);
document.getElementById("addButton").addEventListener("click", addNumbers);
