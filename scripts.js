document.addEventListener("DOMContentLoaded", function() {
   
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
      
        const li = document.createElement("li");
        li.innerText = taskInput.value;

      
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            li.remove();
            saveTasks();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);

      
        taskInput.value = "";

    
        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = [];


    taskList.childNodes.forEach(function(task) {
        tasks.push(task.innerText);
    });

   
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  
    tasks.forEach(function(taskText) {
        const li = document.createElement("li");
        li.innerText = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            li.remove();
            saveTasks();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}