// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWboe0EsQz-ik7esoCuF6kKwTzOp_G7mk",
  authDomain: "netflix-gpt-b8565.firebaseapp.com",
  projectId: "netflix-gpt-b8565",
  storageBucket: "netflix-gpt-b8565.appspot.com",
  messagingSenderId: "105219430303",
  appId: "1:105219430303:web:8068b3d06beb5c27fd8faa",
  measurementId: "G-T3CTBLXPVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();