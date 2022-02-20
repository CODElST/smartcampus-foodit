import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTSG4EcrWQvPKND38guQBBEp8Hcdj6oV4",
  authDomain: "smartcampus-foodit-dc2b9.firebaseapp.com",
  projectId: "smartcampus-foodit-dc2b9",
  storageBucket: "smartcampus-foodit-dc2b9.appspot.com",
  messagingSenderId: "12725829308",
  appId: "1:12725829308:web:58e6c5a9ad211b5d201ab9",
  measurementId: "G-HV5969P0FP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
