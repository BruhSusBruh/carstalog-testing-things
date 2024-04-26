import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAF_4PwHaFYejpj_JYgaA5pDV4SyicIo2M",
  authDomain: "cars-talog.firebaseapp.com",
  projectId: "cars-talog",
  storageBucket: "cars-talog.appspot.com",
  messagingSenderId: "862346088885",
  appId: "1:862346088885:web:840dd9db456834ad3549fc",
  measurementId: "G-X8MP59200M"
};



// Signup function
export const signUp = async (email, password, username, phone) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user info in Firestore
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      phone: phone,
      email: email
    });

    return user;
  } catch (error) {
    throw error;
  }
};

// Login function
export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Signout function
export const signOut = () => {
  return firebaseSignOut(auth);
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
