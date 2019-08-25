import firebase from 'firebase/app';

// Initialize Firebase
  // Your web app's Firebase configuration
  const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA4Q7AaUTlmOpGWRRjYPxffP-3YynkT7ZQ",
    authDomain: "spacestock-977b4.firebaseapp.com",
    databaseURL: "https://spacestock-977b4.firebaseio.com",
    projectId: "spacestock-977b4",
    storageBucket: "spacestock-977b4.appspot.com",
    messagingSenderId: "220349286043",
    appId: "1:220349286043:web:0c020b4b00a8ef61"
  });

const db = firebaseConfig.firestore();

export { db }
