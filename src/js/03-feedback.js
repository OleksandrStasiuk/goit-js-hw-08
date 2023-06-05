import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(formsData, 500));
form.addEventListener('submit', submitForm);

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function formsData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitForm(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function fillFormFields() {
  const { email, message } = form.elements;
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

fillFormFields();
