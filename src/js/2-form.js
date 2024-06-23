formData = { email: '', message: '' };
const feedbackForm = document.querySelector('.feedback-form');
const storageData = localStorage.getItem('feedback-form-state');

// Check if we have saved data
if (storageData) {
  const userData = JSON.parse(storageData);

  // Fill in the form with saved data
  feedbackForm.elements.email.value = userData.email;
  feedbackForm.elements.message.value = userData.message;

  // Fill in the formData object with saved data
  formData.email = userData.email;
  formData.message = userData.message;
}

feedbackForm.addEventListener('input', handlerInput);
function handlerInput(event) {
  event.preventDefault();

  // Get the changed value and element name
  let inputValues = event.target.value;
  let inputName = event.target.name;

  // Place value in formData object
  formData[inputName] = inputValues;

  // Place formData object in localstorage
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();

  // Retrieve values from form
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  // Check if the form is not empty
  if (email != '' && message != '') {
    // Log the formData object
    console.log(formData);

    // Clear localstorage, form, and formData object
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    form.reset();
  }
}
