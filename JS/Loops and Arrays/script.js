let randomNumbers = [];
let maxRange = 20;

const div = document.createElement("div");
div.id = "boxContainer";


function generateRandomNumbers()
{
    for(let i = 0; i < 4; i++)
    {
        randomNumbers[i] = Math.floor(Math.random() * maxRange ) + 1;
    }
}
generateRandomNumbers();

function createSquares()
{
    
    
    for(let i = 0; i < randomNumbers.length; i++)
    {
        const box = document.createElement("div");

        box.addEventListener("click", function ()
        {
            box.classList.toggle("on");
        })
        
        box.textContent = randomNumbers[i]; 

        box.style.boxSizing = "border-box";
        box.style.width = "100px";
        box.style.height = "100px";

        box.style.borderWidth = '1px';
        box.style.borderStyle = 'solid';
        box.style.borderColor = '#000';
        div.appendChild(box);
    
    }

    div.style.width = "200px";
    div.style.display = 'flex'; 
    div.style.flexWrap = 'wrap';
    document.body.appendChild(div);
    
}

createSquares();