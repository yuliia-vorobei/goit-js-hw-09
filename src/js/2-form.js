formData = { email: '', message: '' };
const feedbackForm = document.querySelector('.feedback-form');

const storageData = localStorage.getItem('feedback-form-state');
if (storageData) {
  const userData = JSON.parse(storageData);
  console.log(userData);
  // console.log(feedbackForm.elements.email.value);
  feedbackForm.elements.email.value = userData.email;
  feedbackForm.elements.message.value = userData.message;
}

feedbackForm.addEventListener('input', handlerInput);
function handlerInput(event) {
  event.preventDefault();
  if (event.target.name) {
    let inputValues = event.target.value;
    console.log(inputValues);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
}

feedbackForm.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  console.log(email);
  console.log(message);

  if (email === '' || message === '') {
    alert('Fill please all fields');
  }

  formData.email = email;
  formData.message = message;
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
}
