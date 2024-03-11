import './style.css'

const inputValue = document.getElementById('input-box');
const inputBtn = document.getElementById('input-btn');
const listSection = document.getElementsByClassName('todo-list-section');
const toDoList = document.getElementById('todo-list');
const listArr = [];

inputBtn.addEventListener('click', () => {
  addTask(inputValue.value);
})

inputValue.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(inputValue.value);
  }
})
function addTask(text){
  console.log(text);
  if(!inputValue.value) {
    console.log('Pusty formularz');
  } else {
    renderList(inputValue.value);
    inputValue.value = '';
  }
}

function renderList(text) {
    let task = document.createElement('li');
    task.textContent = text;
    toDoList.appendChild(task)   
}