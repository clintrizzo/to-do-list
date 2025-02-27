var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

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

function init() {
    var storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos !== null) {
        todos = storedTodos;
    }

    renderTodos();
}

function storedTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

todoForm.addEventListener("submit", function(event) {
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

todoList.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);

        storedTodos();
        renderTodos();
    }
});