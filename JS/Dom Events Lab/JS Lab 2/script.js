// ---------------------------------------------------------------------------
// 1. Swapper
// ---------------------------------------------------------------------------
function swapContents() {
  const p1 = document.getElementById("para1");
  const p2 = document.getElementById("para2");

  // YOU FILL IN HERE
  // Swap the contents of the two paragraphs.
  // Hint: you will need somewhere to keep one of them while you overwrite it.

  let tempP1 = p1.textContent;


  p1.textContent = p2.textContent;
  p2.textContent = tempP1;
}

// ---------------------------------------------------------------------------
// 2. Emphasize
// ---------------------------------------------------------------------------
function emphasize() {
  const emphasisElement = document.getElementById("placeForEmphasis");

  // YOU FILL IN HERE
  // Change its colour, make it italic, and give it a yellow highlight.
  // Every CSS property is available on .style — note the camelCase:
  //   element.style.backgroundColor = "yellow";

  emphasisElement.style.color = "#FF0000";
  emphasisElement.style.fontStyle = "italic";
  emphasisElement.style.backgroundColor = "yellow";
}

// ---------------------------------------------------------------------------
// 3. Tiny Calculator
// ---------------------------------------------------------------------------
function calculate() {
  const operand1 = Number(document.getElementById("operand1").value);
  const operand2 = Number(document.getElementById("operand2").value);
  const operation = document.getElementById("operation").value;
  const answerElement = document.getElementById("answer");

  // YOU FILL IN HERE
  // operation is the string "+", "-", "*" or "/".
  // Work out the result and put it into answerElement.
  // Think about what should happen when someone divides by zero.

  console.log(operation);
  
  if(operation == "+")
  {
    answerElement.textContent = (operand1 + operand2);
  }
  if(operation == "-")
  {
    answerElement.textContent = (operand1 - operand2);
  }
  if(operation == "*")
  {
    answerElement.textContent = (operand1 * operand2);
  }
  if(operation == "/" && operand1 != 0 && operand2 != 0)
  {
    answer = (operand1 + operand2);
    answerElement.textContent = answer;
  }
 if(operation == "/" && operand1 == 0 || operand2 == 0)
  {
    
    answerElement.textContent = "Cant Devide by 0";
  }
}

// ---------------------------------------------------------------------------
// 4. Powers Table
// ---------------------------------------------------------------------------
function generatePowersTable() {
  const container = document.getElementById("powersTable");

  // YOU FILL IN HERE
  // Build a table of the powers of 2, from 2^1 up to 2^10, and put it in
  // the container. Use a loop — do not write ten rows by hand.
  // You can build it as an HTML string, or create elements with
  // document.createElement() and append them. Either is fine.
}

// ---------------------------------------------------------------------------
// 5. Magic Eight Ball
// ---------------------------------------------------------------------------
function askEightBall() {
  const answerElement = document.getElementById("eightballAnswer");

  // YOU FILL IN HERE
  // When the eight ball is clicked, answer the question.
  // Keep an array of possible answers and pick one at random.
  // Hint: Math.floor(Math.random() * answers.length)
}

// ---------------------------------------------------------------------------
// Wiring. This is the addEventListener part — nothing to fill in here, but
// read it. Each line says: when this element is clicked, run this function.
// Note we pass the function itself, not the result of calling it — no ().
// ---------------------------------------------------------------------------
document.getElementById("swapButton").addEventListener("click", swapContents);
document.getElementById("emphasizeButton").addEventListener("click", emphasize);
document.getElementById("calculateButton").addEventListener("click", calculate);
document.getElementById("powersButton").addEventListener("click", generatePowersTable);
document.getElementById("eightball").addEventListener("click", askEightBall);
