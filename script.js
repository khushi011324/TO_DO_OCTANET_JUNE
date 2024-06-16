function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function() {
        taskItem.classList.toggle('complete');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(deleteButton);

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskButtons);

    taskList.appendChild(taskItem);

    taskInput.value = '';
}
