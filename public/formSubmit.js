const formRef = document.querySelector('.signup-form');

formRef.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const data = { name, email, password };

  try {
    const res = await fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const { data: user } = await res.json();

    document.location.href = `http://localhost:4000/api/users/${user.id}`;
  } catch (error) {
    console.log(error.message);
  }
}
