const taskNameInput = document.getElementById("taskName");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskName = taskNameInput.value.trim();

    if (taskName !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskName}</span>
            <button class="delete">Delete</button>
        `;

        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
        taskNameInput.value = "";
    }
}