import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu0gTduIh21A9uwrdZ7jfP0HRy0N_z5mo",
  authDomain: "dented-code-92d85.firebaseapp.com",
  projectId: "dented-code-92d85",
  storageBucket: "dented-code-92d85.appspot.com",
  messagingSenderId: "216123671663",
  appId: "1:216123671663:web:2c3cd08e7951a922bcb99a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
