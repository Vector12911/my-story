import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/app';
// import "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT24toH7BQjB1YokjffpqbSuvhWBPp_20",
  authDomain: "writeyourownstory-a477d.firebaseapp.com",
  projectId: "writeyourownstory-a477d",
  storageBucket: "writeyourownstory-a477d.appspot.com",
  messagingSenderId: "607385312298",
  appId: "1:607385312298:web:2cf276835ebf6beaf87753",
  measurementId: "G-81KVHFBGE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = firebase.storage().ref();
const database = getDatabase();
const auth = getAuth(app);

// export { auth, storage };
export { auth,database };