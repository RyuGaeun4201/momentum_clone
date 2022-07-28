const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter( (toDo) => toDo.id !== parseInt(li.id) );
    saveToDo();
    li.remove();
}

function addToDo(toDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
 
    span.innerText = toDoObj.text;
    li.id = toDoObj.id;
    deleteButton.innerText = "X";
    
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", deleteToDo);
}

function submitToDo(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDoInput.value = "";
    toDos.push(newToDoObj);
    addToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", submitToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(addToDo);
}