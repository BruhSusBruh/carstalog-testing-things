import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF_4PwHaFYejpj_JYgaA5pDV4SyicIo2M",
  authDomain: "cars-talog.firebaseapp.com",
  projectId: "cars-talog",
  storageBucket: "cars-talog.appspot.com",
  messagingSenderId: "862346088885",
  appId: "1:862346088885:web:840dd9db456834ad3549fc",
  measurementId: "G-X8MP59200M"
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
