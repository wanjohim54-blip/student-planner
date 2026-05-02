const addbtn = document.getElementById("addbtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task
addbtn.addEventListener("click", addtask);

function addtask() {
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
    }

    // Create List Item
    const li = document.createElement("li");
    // Task Text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");
    li.appendChild(span);

    //Toggle complete
    span.addEventListener("click",function() {
        span.classList.toggle("completed");
    });

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    // Clear Input
    taskInput.value = "";
}



