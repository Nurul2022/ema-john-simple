// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPqujI4xZNIxL0Kt8G3ivWOfWiwM68cGc",
  authDomain: "ema-john-simple-90169.firebaseapp.com",
  projectId: "ema-john-simple-90169",
  storageBucket: "ema-john-simple-90169.appspot.com",
  messagingSenderId: "391533680684",
  appId: "1:391533680684:web:d491ad50a77647ad91d989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;