var addTaskInput = document.getElementById("add-task-input");
var searchInput = document.getElementById("search");
var addTaskButton = document.getElementById("add-task-button");

var todoTasksBody = document.getElementById("tasks-body");
var todoList = [];
// get teh data from teh local storage
if (localStorage.getItem("todo-list") == null) {
  localStorage.setItem("todo-list", JSON.stringify(todoList));
} else {
  todoList = JSON.parse(localStorage.getItem("todo-list"));
}

// display the tasks
displayTasks();
// add new task function
function addTask() {
  // var task = { id: randomId(), task: addTaskInput.value };

  var task = { id: randomId(), task: addTaskInput.value };
  // for (let i = 0; i < todoList.length; i++) {
  //   todoList[i].id = i;
  // }
  todoList.push(task);
  localStorage.setItem("todo-list", JSON.stringify(todoList));
  displayTasks();
}
// display the tasks function
function displayTasks() {
  var todoContent = "";
  for (var i = 0; i < todoList.length; i++) {
    todoContent += ` <div data-id='${todoList.length - i}' class="todo-card d-flex justify-content-between align-items-center mb-3">
          <p class="m-0">index - [ ${i} ] s${todoList[i].task}</p>
          <div class="icons d-flex gap-4">
            <i  class="action-btn fa-solid fa-check"></i>
            <i onclick='removeTask(${i} , ${todoList[i].id})' class="action-btn fa-solid fa-trash"></i>
          </div>
        </div>`;
  }
  todoTasksBody.innerHTML = todoContent;
}

// prevent the reload
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// delete function

function removeTask(index, id) {
  todoList.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(todoList));
  displayTasks();

  // for (let i = 0; i < todoList.length; i++) {
  //   if (todoList[i].id == id) {
  //     console.log(todoList[i].id);
  //     todoList.splice(i, 1); // Remove the task at index i
  //     break; // Exit the loop once the task is removed
  //   }
  // }

  // searchTask();
}

function searchTask() {
  var todoContent = "";

  for (var i = 0; i < todoList.length; i++) {
    if (todoList[i].task.toLowerCase().includes(searchInput.value.toLowerCase())) {
      todoContent += `
        <div data-id='${todoList.length - i}' class="todo-card d-flex justify-content-between align-items-center mb-3">
          <p class="m-0">index - [ ${i} ] ${todoList[i].task}</p>
          <div class="icons d-flex gap-4">
          <i  class="action-btn fa-solid fa-check"></i>
          <i onclick='removeTask(${i} , ${todoList[i].id})' class="action-btn fa-solid fa-trash"></i>
          </div>
        </div>
      `;
    }
  }
  todoTasksBody.innerHTML = todoContent;
}

function randomId() {
  var id = "";
  for (var i = 0; i < 10; i++) {
    id += Math.floor(Math.random() * 10); // Concatenate a random digit (0-9) to the ID string
  }
  return id;
}
