const toDoTask = document.getElementById('toDoTask');
const btnSubmit = document.getElementById('submitTask');
const taskList = document.getElementById('taskList');
const taskArray = [];

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  if (!checkinput()) return;
  pushArray();
  printTask();
  toDoTask.value = '';
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
  taskArray.push({ text: toDoTask.value, checked: false });
}

function printTask() {
  taskList.innerHTML = '';
  for (let i = 0; i < taskArray.length; i++) {
    let newLi = document.createElement('li');
    newLi.innerText = taskArray[i].text;

    if (taskArray[i].checked) {
      newLi.classList.add('checked');
    }

    let btnRemove = document.createElement('button');
    let newI = document.createElement('i');
    newI.classList.add('fa-solid', 'fa-trash');
    btnRemove.appendChild(newI);

    newLi.addEventListener('click', function () {
      toggleChecked(i);
    });
    btnRemove.setAttribute('type', 'button');
    btnRemove.setAttribute('onclick', `deleteItem(${i})`);

    newLi.appendChild(btnRemove);
    taskList.appendChild(newLi);
  }
}

function toggleChecked(index) {
  taskArray[index].checked = !taskArray[index].checked;
  printTask();
}

function deleteItem(item) {
  taskArray.splice(item, 1);
  printTask();
}
