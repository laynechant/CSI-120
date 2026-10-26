// ---------------------------------------------------------------
// MAD LIBS
//
// Everything above the line marked "WIRING" is yours to write.
// The wiring at the bottom is done for you - leave it alone.
// ---------------------------------------------------------------


// Grab the output paragraph once, so you can write to it later.
const storyElement = document.getElementById("story");


function generateStory() {
    // 1. Read each input.
    //    .value always gives you a string, even for the number box.
    //
    //    const adjective = document.getElementById("adjective").value;
    //
    //    Do the same for noun, verb, number and name.

    const adjective = document.getElementById("adjective").value;
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;

    const numberString = document.getElementById("number").value;
    console.log(numberString);
    const number = Number(numberString);

    const name = document.getElementById("name").value;

    // 2. Check for empty boxes BEFORE you build the story.
    //    If any value is an empty string, tell the person what is missing
    //    and stop here with:   return;
    //
    //    Without this you get "The undefined undefined decided to..."
    //
    //    Hint: an empty text box gives you "" , which is falsy.
    //    So  if (adjective === "")  works, and so does  if (!adjective)

    if(!adjective)
    {
        storyElement.textContent = "Your missing an adjective!";
        return;
    }
    if(!noun)
    {
        storyElement.textContent = "Your missing a noun!";
        return;
    }
    if(!verb)
    {
        storyElement.textContent = "Your missing a verb!";
        return;
    }
    if(!numberString)
    {
        storyElement.textContent = "Your missing an adjective!";
        return;
    }
    if(!number)
    {
        console.log("The number didnt convert properly from a string");
        return;
    }

    // 3. Build the story with a template literal - backticks, not quotes.
    //    The ${ } holes get filled with your variables.
    //
    //    const story = `The ${adjective} ${noun} decided to ${verb} ${number} times.`;
    //
    //    Write a longer, sillier one than that. Use all five words.

    const story = `A ${adjective}, ${noun} wanted to change things up so they decidied to ${verb} ${number} times. After doing this, ${name} figured it was the best decision they ever made`;

    // 4. Put it on the page. Not console.log, not alert.
    //
    //    storyElement.textContent = story;

    storyElement.textContent = story;
}


function resetForm() {
    // Clear every input and wipe the story.
    // document.getElementById("wordForm").reset()  clears the inputs for you.

    document.getElementById("wordForm").reset();
    storyElement.textContent = "";
}


// ---------------------------------------------------------------
// WIRING - this connects your functions to the buttons.
// Note there are no parentheses after generateStory. We hand the
// function itself to addEventListener; adding () would call it
// immediately instead of waiting for the click.
// ---------------------------------------------------------------
document.getElementById("generateButton").addEventListener("click", generateStory);
document.getElementById("resetButton").addEventListener("click", resetForm);
