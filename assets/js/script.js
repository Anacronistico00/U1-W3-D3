const toDoTask = document.getElementById('toDoTask');
const btnSubmit = document.getElementById('submitTask');
const taskList = document.getElementById('taskList');
let newLi;
const taskArray = [];

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  if (!checkinput()) return;
  pushArray();
  printTask();
});

function checkinput() {
  if (toDoTask.value === '') {
    alert('Inserisci una task nel campo di testo!!');
    return false;
  } else {
    return true;
  }
}

function pushArray() {
  taskArray.push(toDoTask.value);
}

function printTask() {
  taskList.innerHTML = '';
  for (let i = 0; i < taskArray.length; i++) {
    newLi = document.createElement('li');
    newLi.innerText = taskArray[i];
    let btnRemove = document.createElement('button');
    let newI = document.createElement('i');
    newI.classList.add('fa-solid', 'fa-trash');
    btnRemove.setAttribute('type', 'button');
    btnRemove.setAttribute('onclick', `deleteItem(${i})`);
    btnRemove.appendChild(newI);

    newLi.appendChild(btnRemove);
    taskList.appendChild(newLi);
  }
}

function deleteItem(item) {
  taskArray.splice(item, 1);
  printTask();
}
