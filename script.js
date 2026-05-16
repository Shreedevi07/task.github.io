let tasks = [];

function addTask(){

    let input = document.getElementById("taskInput");

    let taskText = input.value.trim();

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    tasks.push(taskText);

    showTasks();

    input.value = "";
}

function deleteTask(index){

    tasks.splice(index, 1);

    showTasks();
}

function editTask(index){

    let updatedTask = prompt("Edit task:", tasks[index]);

    if(updatedTask !== null && updatedTask.trim() !== ""){

        tasks[index] = updatedTask;

        showTasks();
    }
}

function showTasks(){

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for(let i = 0; i < tasks.length; i++){

        list.innerHTML += `
        <li>

            <span>${tasks[i]}</span>

            <div>

                <button 
    class="edit-btn"
    onclick="editTask(${i})"
>
    🖉
</button>

                <button 
                    class="delete-btn"
                    onclick="deleteTask(${i})"
                >
                    🗑️
                </button>

            </div>

        </li>
        `;
    }
}
document
    .getElementById("taskInput")
    .addEventListener("keypress", function(event){

        if(event.key === "Enter"){
            addTask();
        }

});