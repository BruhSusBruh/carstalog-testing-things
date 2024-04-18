import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// Signup function
export const signUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

// Login function
export const logIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

// Signout function
export const signOut = () => {
  return auth.signOut();
};
