import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const fbEmail = document.querySelector('#email');
const fbMessage = document.querySelector('#message');

let data = {};

function dataCheck(name) {
  const getItem = localStorage.getItem(name);
  if (getItem) {
    return JSON.parse(getItem);
  } else return {};
}

function dataSave(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function dataSubmit(e) {
  if (validateForm()) {
    form.reset();
    console.log(data);
    data = {};
    localStorage.removeItem('feedback-form-state');
  }
  e.preventDefault();
}

function validateForm() {
  if (!data.email || !data.message) {
    alert('Fill both fields!');
    return false;
  } else return true;
}

form.addEventListener('submit', dataSubmit);
form.addEventListener('input', throttle(dataSave, 500));

function preload() {
  data = dataCheck('feedback-form-state');
  fbEmail.value = data.email || '';
  fbMessage.value = data.message || '';
}

preload();
