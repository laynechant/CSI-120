
function CreateATodoListCategory()
{
    let listName = document.getElementById("todoListName").value;
    let listContainer = document.getElementById("todoListContainer");
    //let listCategory = document.getElementById("todoListCategory");

    let newTodoCategory = document.createElement("ul");
    //newTodoCategory.id = "todoListCategory";
    newTodoCategory.id = listName;

    let newTodoList = document.createElement("li");
    newTodoList.id = "todoList";

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

    // the argument is the pointer event which isnt what i want
    // Todo: figure out how to pass in the listCategory
    createTodoButton.addEventListener("click", (e) => {
        console.log(listName);
        CreateATodo(newTodoList);
    })


    newTodoList.appendChild(newTodoInput);
    
    listContainer.appendChild(newTodoCategory);
    newTodoCategory.appendChild(newTodoList);
    newTodoList.append(createTodoButton);
}

function CreateATodo(ListName)
{
    let TodoOrganizer = document.createElement("li");
    let TodoCheckbox = document.createElement("input");
    TodoCheckbox.type = "checkbox";
    TodoCheckbox.id = "todoCheckBox";
    // use this in css so i can style when a thing is done and cross it out
    TodoCheckbox.value = "done";

    // Todo: i need some way to get the specifc todo list to append the task to 

    let TodoName = document.createElement("input");
    TodoName.id = "todoName";

    TodoOrganizer.appendChild(TodoCheckbox);
    TodoOrganizer.appendChild(TodoName);

    CreateDeleteButton(TodoOrganizer);

    ListName.appendChild(TodoOrganizer);
}

function CreateDeleteButton(TodoObject)
{
    let DeleteButton = document.createElement("button");
    DeleteButton.textContent = "X";



    TodoObject.appendChild(DeleteButton);

   
    DeleteButton.addEventListener("click", (h) =>
    {
        DeleteATodo(TodoObject);
    })


    return DeleteButton;

}

function DeleteATodo(ElementToRemove)
{
    ElementToRemove.remove();
}

// Todo: clear the input field when the change event fires - maybe just clear it in the called func

document.getElementById("todoListName").addEventListener("change", CreateATodoListCategory);