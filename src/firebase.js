import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9R1XX5yQfFV9V4iKEKiO5LI3q14ZgMHI",
    authDomain: "myproject-44c3b.firebaseapp.com",
    databaseURL: "https://myproject-44c3b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myproject-44c3b",
    storageBucket: "myproject-44c3b.appspot.com",
    messagingSenderId: "393327091300",
    appId: "1:393327091300:web:c20b1907cc9fb3e4aec971"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db2 = getDatabase(app);
export const db = getFirestore(app);
