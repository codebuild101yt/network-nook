// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Get form element
const loginForm = document.querySelector('#login-form');
const uploadForm = document.querySelector('#upload-form');

// Add submit event for login form
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get email and password values
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // Sign in user
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    // Close login modal
    loginForm.reset();
  }).catch((error) => {
    console.error(error);
  });
});

// Add submit event for upload form
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get image URL and caption values
  const imageUrl = uploadForm['image-url'].value;
  const caption = uploadForm['caption'].value;

  // Add post to database
  addPostToDatabase(imageUrl, caption).then(() => {
    // Clear form
    uploadForm.reset();
  }).catch((error) => {
    console.error(error);
  });
});

function addPostToDatabase(imageUrl, caption) {
  const post = {
    imageUrl: imageUrl,
    caption: caption
  };

  // Get a new key for the post
  const newPostKey = database.ref().child('posts').push().key;

  // Write the new post data in the posts list
  const updates = {};
  updates[`/posts/${newPostKey}`] = post;
  return database.ref().update(updates);
}

// Sign out users when they close the tab
window.onbeforeunload = function() {
  firebase.auth().signOut();
};
