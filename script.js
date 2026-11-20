// Elements ko select karna
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Button click event
addBtn.addEventListener('click', addTask);

// Enter key dabane par bhi task add ho
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Pehle koi task likhein!");
        return;
    }

    // Naya list item (li) banana
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    // List mein add karna aur input khali karna
    taskList.appendChild(li);
    taskInput.value = "";
}

// Task delete karne ka function
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
