var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count")

var todos = [];

intit();

function renderTodos();
todoList.innerHTML = "";
todoCountSpan = todos.length;

for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
}