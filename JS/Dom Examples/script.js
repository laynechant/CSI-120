
// grabs the container div
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("conent");
content.textContent = "this is the glorious text-content";

container.appendChild(content);

console.log(container);
// gets the first child of container
//const display = container.firstElementChild;
//console.log(display);

const btn = document.querySelector("#btn");
console.log(btn);
//btn.addEventListener("click", () => {alert("Hello World");});
btn.addEventListener("click", function (e)  {
   e.target.style.background = "blue";
});

// gather all the buttons into a node list
const buttons = document .querySelectorAll("button");
// loop through all the buttons and add an event to popup a alert window to display the buttons id
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});


const controls = document.querySelector("#controls");

// this selects controls sibling display
const display = controls.previousElementSibling;
console.log(display);

// element.querySelector returns a ref to the first match of the selector

// element.querySelectorAll returns a "NodeList" containing refs to all selectors that match

// ^^ this returns a node list not an array

// it can be converted to a list through Array.from()