let addButton = document.getElementById("add-button");
let todoInput = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function() {
  let listItem = document.createElement("li");
  listItem.innerText = todoInput.value;
  todoList.appendChild(listItem);
  todoInput.value = "";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function() {
    todoList.removeChild(listItem);
  });
  listItem.appendChild(deleteButton);
});

todoList.addEventListener("click", function(event) {
  let target = event.target;
  if (target.tagName.toLowerCase() === "li") {
    target.classList.toggle("completed");
  }
});
