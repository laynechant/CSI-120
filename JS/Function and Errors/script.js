function greet(name = "friend")
{
    return `Hello, ${name}!`;
}

function isEven(n)
{
    const number = Number(n);
    if(number % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/* 
    For the Refrence error I did const num3 = Number(d);
    since d isnt a parameter passed into the function it caused 
    this error 
    script.js:29 Uncaught ReferenceError: d is not defined
    at biggest (script.js:29:25)
    at script.js:66:20
*/

function biggest(a, b, c)
{
    const num1 = Number(a);
    const num2 = Number(b);
    const num3 = Number(c);

    if (num1 > num2)
    {
        if (num1 > num3)
        {
            return num1;
        }
    }
    if (num2 > num1)
    {
        if (num2 > num3)
        {
            return num2;
        }
    }
    if (num3 > num1)
    {
        if (num3 > num2)
        {
            return num3;
        }
    }
}

/* 
    For the Syntax error i ended up doing

    function shout(text)
    {
    const word = String(text);
    return `${word.toUpperCase()} !`

    Which gave me the error 
    script.js:97 Uncaught SyntaxError: Unexpected end of input (at script.js:97:24)

    I fixed this by adding the curly brack back to the shout function
*/

function shout(text)
{
    const word = String(text);
    return `${word.toUpperCase()} !`
}

/* 
    For the type error i ended up writing 
    const greeting = greet("Ada");
    console.gol(greeting);

    this gave me the error 
    script.js:72 Uncaught TypeError: console.gol is not a function
    at script.js:72:9

    i solved this by changing the function to console.log
*/

const greeting = greet("Ada");
console.log(greeting);

const even = isEven(2);
console.log(even);

const largestNum = biggest(4, 48, 15);
console.log(largestNum);

const shoutText = shout("im shouting");
console.log(shoutText);