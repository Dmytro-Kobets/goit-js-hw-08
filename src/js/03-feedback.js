import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const fbEmail = document.querySelector('#email');
const fbMessage = document.querySelector('#message');

function DataSave(e) {
  e.preventDefault();
  const feedback = {
    email: fbEmail.value,
    message: fbMessage.value,
  };
  const data = JSON.stringify(feedback);
  localStorage.setItem('feedback-form-state', data);
}

form.addEventListener('input', throttle(DataSave, 500));
