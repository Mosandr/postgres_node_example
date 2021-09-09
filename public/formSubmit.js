const formRef = document.querySelector('.signup-form');
console.log(formRef);

formRef.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
}
