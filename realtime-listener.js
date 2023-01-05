// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Get the posts container element
const postsContainer = document.querySelector('#posts');

// Retrieve posts from the database
retrievePosts();

function retrievePosts() {
  database.ref('posts').on('value', (snapshot) => {
    // Get the posts list
    const posts = snapshot.val();

    // Clear the posts container
    postsContainer.innerHTML = '';

    // Add the posts to the page
    for (let postKey in posts) {
      // Get the post data
      const post = posts[postKey];
      const imageUrl = post.imageUrl;
      const caption = post.caption;

      // Create a new post element
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <img src="${imageUrl}" alt="Post image">
        <p>${caption}</p>
      `;

      // Add the post element to the posts container
      postsContainer.appendChild(postElement);
    }
  });
}