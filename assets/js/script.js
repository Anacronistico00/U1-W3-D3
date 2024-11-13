const toDoTask = document.getElementById('toDoTask');
const btnSubmit = document.getElementById('submitTask');
const taskList = document.getElementById('taskList');
let newLi = document.createElement('li');
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
    newLi.innerText = taskArray[i];
    let btnRemove = document.createElement('button');
    let newI = document.createElement('i');
    newI.classList.add('fa-solid', 'fa-trash');
    checkUncheck();
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

function checkUncheck() {
  if (newLi.classList === 'checked') {
    newLi.addEventListener('click', function () {
      newLi.classList.add('checked');
    });
  } else {
    newLi.addEventListener('click', function () {
      newLi.classList.remove('checked');
    });
  }
}
