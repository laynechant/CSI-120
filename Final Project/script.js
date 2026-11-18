
function CreateATodoListCategory()
{
    let listName = document.getElementById("todoListName").value;
    let listContainer = document.getElementById("todoListContainer");

    let newTodoCategory = document.createElement("ul");
    newTodoCategory.className = "todoCategory";

    let newTodoList = document.createElement("li");
    newTodoList.className = "todoList";

    let newTodoInput = document.createElement("input");
    newTodoInput.className = "listTitle";
    newTodoInput.value = listName;

    let createTodoButton = document.createElement("button");
    createTodoButton.className = "createTodo";
    createTodoButton.textContent = "Create a Todo for this List";


    createTodoButton.addEventListener("click", () => {
        CreateATodo(newTodoList);
    })


    newTodoList.appendChild(newTodoInput);
    
    listContainer.appendChild(newTodoCategory);
    newTodoCategory.appendChild(newTodoList);
    newTodoList.append(createTodoButton);
}

function CreateATodo(ListName)
{
    let todo = document.createElement("li");
    todo.className = "todo";
    let TodoCheckbox = document.createElement("input");
    TodoCheckbox.type = "checkbox";
    TodoCheckbox.className = "todoCheckBox";
    // use this in css so i can style when a thing is done and cross it out
    TodoCheckbox.value = "done";

    let TodoName = document.createElement("input");
    TodoName.className = "todoName";

    todo.appendChild(TodoCheckbox);
    todo.appendChild(TodoName);

    CreateDeleteButton(todo);

    ListName.appendChild(todo);
}


function CreateDeleteButton(TodoObject)
{
    let DeleteButton = document.createElement("button");
    DeleteButton.textContent = "X";
    DeleteButton.className = "deleteTodo";

    TodoObject.appendChild(DeleteButton);

    DeleteButton.addEventListener("click", () =>
    {
        TodoObject.remove();
    })

}


function CreateSearchBar()
{
    const todoContainer = document.getElementById("todoListContainer");
    const label = document.createElement("label");
    label.textContent = "Search for Specfic Todo's";
    const searchBar = document.createElement("input");
    searchBar.type = "search";
    searchBar.className = "searchBar";

    searchBar.placeholder = "Search Todo's...";

    searchBar.addEventListener("input", () =>
    {
        const todoNames = document.getElementsByClassName("todoName");
        // pass in what the user wrote
        SearchTodos(searchBar.value, todoNames);
    })

    todoContainer.appendChild(label);
    todoContainer.appendChild(searchBar);
}

CreateSearchBar();

// Hide all the todos when searching
// if we find one display it if it doesnt find anything display all todos
// and tell the user we didnt find anything
function SearchTodos(searchedName, todoList)
{ 
    const lowerCaseName = searchedName.toLowerCase();
    for(const element of todoList)
    {
        const container = element.parentElement;

        const name = element.value.toLowerCase();
        
        container.hidden = !name.includes(lowerCaseName);
    }
}


// Todo: clear the input field when the change event fires - maybe just clear it in the called func

document.getElementById("todoListName").addEventListener("change", CreateATodoListCategory);