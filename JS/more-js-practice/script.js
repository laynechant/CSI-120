// ===========================================================================
// Part 1 — Cash Register
// ===========================================================================
// Write cashRegister(cart). It takes an object of itemName: itemPrice pairs
// and returns the total price of everything in it.
//
// Do NOT hard-code the item names. Pretend you have no idea what is in the
// cart — it should work on any cart you are handed.
//
// Useful:  Object.keys(obj)  Object.values(obj)  Object.entries(obj)
// Careful: the prices are STRINGS. "34.99" + "7.99" is "34.997.99", not 42.98.

function cashRegister(cart) {
  let price = 0.0;
  let itemPrices = Object.values(cart);

  itemPrices.forEach((item) =>{
      
      let numPrice = Number(item);
      price += numPrice;
  })

  return price;
}

// ===========================================================================
// Part 2 — Credit Card Validator
// ===========================================================================
// Write validateCreditCard(number). It returns true or false.
//
// A valid card number:
//   - is 16 digits long, and every character is a number
//   - has at least two DIFFERENT digits (not all the same digit)
//   - ends in an even digit
//   - has all its digits summing to more than 16
//
// Build it up one rule at a time. Check each rule works before adding the next.

function validateCreditCard(number) {
  // YOU FILL IN HERE
  let strNum = String(number);

  if(strNum.length != 16)
    return false;

  for(let i = 0; i < strNum.length; i++)
  {
     if(isNaN(strNum[i])) return false;
            
  }

    if(new Set(strNum).size < 2) return false;

    if(strNum[strNum.length - 1] % 2 !== 0) return false;

    const sum = [...strNum].reduce((a, d) => a + Number(d), 0);
    
    if(sum <= 16) return false;

    return true;

  }


// ===========================================================================
// Test cases — leave these in. They should all print true when you are done.
// ===========================================================================
const petStoreCart = {
  dogFood: "34.99",
  treats:  "7.99",
  leash:   "25.01",
  collar:  "9.99",
  puppy:   "450.00"
};

console.log("cashRegister total:", cashRegister(petStoreCart), "(should be 527.98)");

console.log("--- these should all be true");
console.log(validateCreditCard("9999777788880000") === true);
console.log(validateCreditCard("6666666666661666") === true);
console.log(validateCreditCard("a92332119c011112") === false);  // non-numeric
console.log(validateCreditCard("4444444444444444") === false);  // only one digit used
console.log(validateCreditCard("1111111111111110") === false);  // sum too low
console.log(validateCreditCard("6666666666666661") === false);  // odd final digit


/* 
  let char = strNum[i];
    
    count[char] = (count[char] || 0) + 1;

    let repeat = Object.values(count).some(count => count > 1);
    
    if(repeat)
      return false;
    else
    {
      return true;
    } 
  */