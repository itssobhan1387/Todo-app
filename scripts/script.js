const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="task-container">
            <input type="checkbox" onchange="toggleTaskCompletion(this)">
            <span>${taskText}</span>
        </div>
        <div>
            <button class="edit" onclick="showEditForm(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
        <div class="edit-form">
            <input type="text" class="edit-input" placeholder="Edit task...">
            <button onclick="saveEdit(this)">Save</button>
        </div>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.add('fade-out');
    setTimeout(() => {
        taskList.removeChild(li);
    }, 300);
}

function showEditForm(button) {
    const li = button.parentElement.parentElement;
    const editForm = li.querySelector('.edit-form');
    const taskText = li.querySelector('span').textContent;
    const editInput = li.querySelector('.edit-input');
    editForm.style.display = 'block';
    editInput.value = taskText;
    li.querySelector('span').style.display = 'none';
}

function saveEdit(button) {
    const li = button.parentElement.parentElement;
    const editInput = li.querySelector('.edit-input');
    const newText = editInput.value.trim();

    if (newText === "") {
        alert("Please enter a valid task!");
        return;
    }
    li.querySelector('span').textContent = newText;
    li.querySelector('span').style.display = 'inline';
    li.querySelector('.edit-form').style.display = 'none';
}

function toggleTaskCompletion(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add('completed');
        taskText.style.animation = 'completeTask 0.2s ease-out';
    } else {
        taskText.classList.remove('completed');
        taskText.style.animation = 'none';
    }
}
