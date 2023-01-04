let taskArray = [
];

const preloader = document.querySelector('.preloader');
const content = document.querySelector('.content');
const addBtn = document.getElementById('add-btn');
const backBtn = document.querySelector('.go-back');
const addContent = document.querySelector('.add-content');
const input = document.getElementById('input');
const addTaskBtn = document.querySelector('.add-task-btn');
const newTask = document.querySelector('.new-task');

const currentTime = document.querySelector('.current-time');

const todoList = document.querySelector('.todo-list');

window.addEventListener("load", function () {
    preloader.classList.add('hide-preloader');
    showTask(taskArray);
});

function showTime() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    console.log(time);
}

addBtn.addEventListener("click", function () {
    addContent.classList.add('show-add-content');
    input.value = "";
    changeColorBtn();
});

function showAddContent() {
    addContent.classList.remove('show-add-content');
}

backBtn.addEventListener("click", function () {
    showAddContent();
});

function showTask(task) {
    let allTasks = task.map(function (item) {
        return `<div class="task">
        <div class="checkbox">
          <input class="styled-checkbox" id="${item.id}" type="checkbox" />
          <label for="${item.id}"><span class="task-text">${item.task}</span></label>
        </div>        
        </div>`
    });
    allTasks = allTasks.join("");
    todoList.innerHTML = allTasks;
};

addTaskBtn.addEventListener("mousedown", function () {
    let Object = {};
    Object.id = taskArray.length + 1;
    Object.task = input.value;

    if (input.value != 0) {
        taskArray.push(Object);
        console.log(taskArray);
        showAddContent();
        showTask(taskArray);
    }
});

function changeColorBtn() {
    if (input.value.length == 0) {
        addTaskBtn.style.backgroundColor = "rgba(34, 47, 62, 0.5)"
    }
    else {
        addTaskBtn.style.backgroundColor = "#222F3E";
    }
};


