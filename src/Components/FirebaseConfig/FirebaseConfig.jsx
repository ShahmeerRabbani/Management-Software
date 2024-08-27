// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmUC7wl5fI_aT6D1uySZx_-W7YQDm5ODg",
  authDomain: "management-software-14b5d.firebaseapp.com",
  projectId: "management-software-14b5d",
  storageBucket: "management-software-14b5d.appspot.com",
  messagingSenderId: "379847962473",
  appId: "1:379847962473:web:1705186c2acc3ed10717f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {app, db, auth};