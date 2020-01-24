const addBtn = document.getElementById('addBtn');
const removeBtn = document.querySelectorAll('.removeBtn');
const input = document.getElementById('task');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');
const tasksTodo = document.getElementById('tasks-title');
const tasksDone = document.getElementById('done-title');

addBtn.addEventListener('click', function() {
    if (input.value) {
        addTask(input.value);
        input.value = '';
    }
})

task.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {   // Enter key
        if (input.value) {
        addTask(input.value);
        input.value= '';
        }
    }
})

function addTask(text) {
    let element = document.createElement('li');
    let remove = document.createElement('button');
    let check = document.createElement('button');

    element.innerHTML = text;
    element.classList.add('item');
    
    remove.innerHTML = 'X';
    remove.classList.add('removeBtn');
    remove.addEventListener('click', function() {
        todoList.removeChild(remove.parentElement);
        isAnyTask();
    })

    check.innerHTML = '&check;'
    check.classList.add('checkBtn');
    
    element.appendChild(check);
    element.appendChild(remove);
    check.addEventListener('click', () => {
        checkTask(check.parentElement);
        todoList.removeChild(check.parentElement);
        isAnyTask();
    });
    todoList.insertBefore(element, todoList.childNodes[0]);

    isAnyTask()   
}

function checkTask(element){
    let task = element.firstChild.textContent;
    let item = document.createElement('li');
    let remove = document.createElement('button');

    item.innerHTML = task;
    item.classList.add('item')
    item.classList.add('done')

    remove.innerHTML = 'X';
    remove.classList.add('removeBtn');
    remove.addEventListener('click', function() {
        doneList.removeChild(remove.parentElement);
        isAnyTask();
    })

    item.appendChild(remove);
    doneList.insertBefore(item, doneList.childNodes[0]);

    isAnyTask();
}

function isAnyTask() {
    if (todoList.innerHTML === '') {
        tasksTodo.textContent = "You have no task!"
    } else {
        tasksTodo.textContent = "All Tasks";
    }
    
    if (doneList.innerHTML === '') {
        tasksDone.textContent = '';
    } else {
        tasksDone.textContent = 'Completed tasks';
    }
}

isAnyTask();