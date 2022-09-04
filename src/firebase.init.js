// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDI_yXRa2mThbTaKnZ3zl7Y7rWfmgbSay0',
  authDomain: 'bank-of-bd.firebaseapp.com',
  projectId: 'bank-of-bd',
  storageBucket: 'bank-of-bd.appspot.com',
  messagingSenderId: '278437275138',
  appId: "1:278437275138:web:43bff7bd07e79999d5291b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;