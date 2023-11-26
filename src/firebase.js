import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"



const firebaseConfig = {
    apiKey: "AIzaSyBhF8LldwpqaRWqYQTOAjIHnTb_dZYAsoo",
    authDomain: "email-validation-e8faa.firebaseapp.com",
    projectId: "email-validation-e8faa",
    storageBucket: "email-validation-e8faa.appspot.com",
    messagingSenderId: "27125148974",
    appId: "1:27125148974:web:b065b03b5aeb9476955ebf"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;