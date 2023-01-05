// Get form element
const loginForm = document.querySelector('#login-form');

// Add login event
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get email and password values
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;

  // Sign in user
  auth.signInWithEmailAndPassword(email, password).then(() => {
    // Show post form
    document.querySelector('#post-form').style.display = 'block';

    // Clear form
    loginForm.reset();
  }).catch((error) => {
    console.error(error);
  });
});
