// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDovZARXuuslX4H4HIHDfuFTFBL9nQRHMk",
  authDomain: "react-redux-firebase-axios-mui.firebaseapp.com",
  projectId: "react-redux-firebase-axios-mui",
  storageBucket: "react-redux-firebase-axios-mui.appspot.com",
  messagingSenderId: "964665106913",
  appId: "1:964665106913:web:e078c4335ca74101ea72a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export default app;
