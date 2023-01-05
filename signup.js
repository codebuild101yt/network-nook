// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get form element
const signUpForm = document.querySelector('#sign-up-form');

// Add submit event
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get email and password values
  const email = signUpForm['sign-up-email'].value;
  const password = signUpForm['sign-up-password'].value;

  // Sign up user
  firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
    // Close sign up modal
    signUpForm.reset();
  }).catch((error) => {
    console.error(error);
  });
});
