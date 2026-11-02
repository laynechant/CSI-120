
function squareNumber(num)
{

    console.log(`The result of squaring the number ${num} is ${Math.pow(num, 2)}.`);
    return (Math.pow(num, 2));
}


function halfNumber(num)
{
    let half = (num / 2);

    console.log(`Half of ${num}, is ${half.toFixed(1)}.`);
    return (num / 2);
}

function percentOf(num1, num2)
{
    let percent = (num1 / num2) * 100;
    let percentRounded = percent.toFixed(2);
    console.log(`${num1} is ${percentRounded}% of ${num2}.`);
    return ((num1 / num2) * 100);
}

function areaOfCircle(radius)
{
    let area = (Math.PI * Math.pow(radius, 2));
    let areaRounded = area.toFixed(2);

    console.log(`The area for a circle with radius ${radius} is ${areaRounded}.`);
    return Number(areaRounded);
}

function doOperations(num)
{
    let halvedNum = halfNumber(num);
    let squaredNum = squareNumber(halvedNum);
    let area = areaOfCircle(squaredNum);
    let percentage = percentOf(area, squaredNum);
    return percentage;
}

doOperations(5);
const answer  = ['F', 'O', 'X'];
const guesses = ['_', '_', '_'];


let isGuessing = false;
let hasUserWon = false;

function guessLetter(letter)
{
 

    console.log(`${guesses[0]} ${guesses[1]}  ${guesses[2]}`);
    isGuessing = true;

    if(answer.includes(letter))
    {
        
        switch(letter)
        {
            case answer[0]:
                guesses.splice(0, 1, letter);
                console.log(`${letter} ${guesses[1]}  ${guesses[2]}`);
                
                break;
            
            case answer[1]:
                guesses.splice(1, 1, letter);
                console.log(`${guesses[0]} ${guesses[1]}  ${guesses[2]}`);
                break;

            case answer[2]:
                guesses.splice(2, 1, letter);
                console.log(`${guesses[0]} ${guesses[1]}  ${guesses[2]}`);
                
                break;
        }
    }

    if(!guesses.includes('_'))
    {
        console.log("You Guessesd the word! Congratulations!");
        hasUserWon = true;
    }
    userGuesses++;
}

    let maxGuesses = 3;
    let userGuesses = 0;

function main()
{

    const input = require('readline');

    question(input);

}
let createdInterface = false;

function createInterface(input)
{
  const r1 = input.createInterface({
            input: process.stdin, 
            output: process.stdout,
        });

    createdInterface = true;
    return r1;

}

let r1;

function question(input)
{
  
    if(!createdInterface)
    {
        r1 = createInterface(input);
    }

    r1.question('Guess a Letter:', letter => {

        
        guessLetter(letter);
        
        if(hasUserWon)
        {
            r1.close();
        }
        else if(userGuesses >= maxGuesses)
        {
            console.log("You've reached the max number of guesses! Goodbye");
            r1.close(); 
        }
        else
        {
            question(input);
        }
            
    });
}

main();