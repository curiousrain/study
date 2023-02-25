const tasksOutput = document.getElementById("tasksOutput");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const clearTasksBtn = document.getElementById("clearTasks");

addTaskBtn.addEventListener("click", addTask);
clearTasksBtn.addEventListener("click", clearTasks);

const tasks = [];
render();
function render() {
    if (tasks.length == 0) {
        tasksOutput.textContent = "Нет задач";
        clearTasksBtn.disabled = true;
        return;
    }

    clearTasksBtn.disabled = false;

    const tasksString = tasks.map((t, i) => `<li>${t.text} <input onchange='checkTask(this, ${i})' type="checkbox" ${t.isDone ? 'checked' : ""}/></li>`).join('\n');
    tasksOutput.innerHTML = `<ul>${tasksString}</ul>`
}

function addTask() {
    tasks.push({
        text: taskInput.value,
        isDone: false
    });
    taskInput.value = "";
    render();
}

function checkTask(checkbox, checkboxId) {
    tasks[checkboxId].isDone = checkbox.checked;
}

function clearTasks() {
    tasks.length = 0;
    render();
}