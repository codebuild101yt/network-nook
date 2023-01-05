// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiLsk0YYwvvS10dEhoGRoXElFnIcbTZOM",
    authDomain: "the-network-nook.firebaseapp.com",
    projectId: "the-network-nook",
    storageBucket: "the-network-nook.appspot.com",
    messagingSenderId: "993425514023",
    appId: "1:993425514023:web:681e960e17fbf0717eb802",
    measurementId: "G-SFM4F40QQW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const storage = firebase.storage();
  const db = firebase.firestore();
  