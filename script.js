let tasks = []

function showTasks(){
    let list = document.getElementById('tasklist')
    list.innerHTML = '';

    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        list.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        ${(tasks[index])}
        <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${index})">Delete</button>
        </li>
        `

        if(tasks.length === 0){
            list.innerHTML = '<li class="list-group-item text-muted">No tasks yet.Add your first one above.</li>'
        }

        document.getElementById('count').innerHTML = 'Tasks:' + tasks.length;
    }
}

function addTask(){
    let input =document.getElementById('taskinput');
    let task = input.value;

    if(task ===''){
        alert('Please type a task first');
        return;
    }

    tasks.push(task);
    showTasks();
    input.value = ''  
}

function deleteTask(index){
    let sure =confirm('Are you sure you want to delete this task');

    if(sure === true){
     tasks.splice(index,1)
     showTasks();
    }
}