// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Get form element
const uploadForm = document.querySelector('#upload-form');

// Add submit event
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
