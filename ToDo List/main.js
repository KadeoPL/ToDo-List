import './style.css'

let inputValue = document.getElementById('input-box');
const inputBtn = document.getElementById('input-btn');

inputBtn.addEventListener('click', () => {
  addTask(inputValue.value);
})

inputValue.addEventListener('keypress', () => {
  addTask(inputValue.value);
})

function addTask(text){
  console.log(text);
  if(!inputValue.value) {
    console.log('Pusty formularz');
  } else {
    inputValue.value = '';
  }
}