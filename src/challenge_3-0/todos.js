const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");
const todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";

  for (const todo of todos) {
    const todoElement = document.createElement("li");
    const linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");
    let position = todos.indexOf(todo);
    linkElement.setAttribute("onclick", `deleteTodo(${position})`);

    let todoText = document.createTextNode(todo);
    let linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);

    listElement.appendChild(todoElement);
    todoElement.appendChild(linkElement);
  }
}

function addTodo() {
  let todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";

  renderTodos();
  saveToStorage();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}

buttonElement.addEventListener("click", addTodo);

renderTodos();
