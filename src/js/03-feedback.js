import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const fbEmail = document.querySelector('#email');
const fbMessage = document.querySelector('#message');

let data = {};

function dataSave(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function dataSubmit(e) {
  e.preventDefault();
  form.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

form.addEventListener('input', throttle(dataSave, 500));
form.addEventListener('submit', dataSubmit);

function preload() {
  const preData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (preData) {
    fbEmail.value = preData.email || '';
    fbMessage.value = preData.message || '';
  }
}

preload();
