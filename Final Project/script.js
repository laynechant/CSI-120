
function CreateATodoListCategory()
{
    let listName = document.getElementById("todoListName").value;
    let listContainer = document.getElementById("todoListContainer");
    //let listCategory = document.getElementById("todoListCategory");

    // this should create a unordered list of todos with the specified 
    // name

    let newTodoCategory = document.createElement("ul");
    newTodoCategory.id = "todoListCategory";

    let newTodoList = document.createElement("li");
    newTodoList.id = "todoList";


    // Todo - How can i make it so the list name is saved to this input value
    // Todo - Maybe I should make a new label to so it shows the specified category
    let newTodoInput = document.createElement("input");
    newTodoInput.id = "input";
    newTodoInput.value = listName;

   /*  let newTodoLabel = document.createElement("label");
    newTodoLabel.id = "todoListLabel";
    newTodoLabel.textContent = listName; 
    listContainer.appendChild(newTodoLabel);
    */

    let createTodoButton = document.createElement("button");
    createTodoButton.id = "createTodo";
    createTodoButton.textContent = "Create a Todo for this List";



    newTodoList.appendChild(newTodoInput);
    
    listContainer.appendChild(newTodoCategory);
    newTodoCategory.appendChild(newTodoList);
    newTodoList.append(createTodoButton);
}

function CreateATodo()
{
    let Todo = document.createElement("input");
    Todo.type = "checkbox";
    Todo.id = "todo";
    

}


document.getElementById("todoListName").addEventListener("change", CreateATodoListCategory);