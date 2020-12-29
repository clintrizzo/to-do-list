var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count")

var todos = [];

intit();

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan = todos.length;

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Complete";

        li.appendChild(button);
        todoList.appendChild(li);
    }
}

function intit() {
    var storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos !== null) {
        todos = storedTodos;
    }

    renderTodos();
}

function storedTodos() {
    localStorage.setItemJSON.stringify(todos);
}

todoForm.addEventListener("sumbit", function(event) {
    event.preventDefault();

    var todoText = todoInput.value.trim();

    if (todoText === "") {
        return;
    }

    todos.push(todoText);
    todoInput.value = "";

    storedTodos();
    renderTodos();
});