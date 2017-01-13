var newTask = document.getElementById('new-task');
var taskList = document.getElementById('task-list');

function addTask(e){
  e.preventDefault();
  if(e.which === 13){
    var newTaskEl = document.createElement('li');
    var newTask = document.createElement('span');
    var newTaskCheckbox = document.createElement('input');
    newTaskCheckbox.type = "checkbox";
    newTask.textContent = this.value;
    newTaskEl.appendChild(newTaskCheckbox);
    newTaskEl.appendChild(newTask);
    taskList.appendChild(newTaskEl);
    this.value = "";
    completeTask();
  }
}

function completeTask(){
  for(var i = 0; i < taskList.children.length; i++){
    var check = taskList.children[i].querySelector('input');
    check.addEventListener('change',function(){
      if(this.checked){
        this.parentElement.classList.add('completed');
      }
    });
  }
}

newTask.addEventListener('keyup',addTask);

