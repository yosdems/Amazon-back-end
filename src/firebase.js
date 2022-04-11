// import firebase from "firebase/compat/app"
// import "firebase/compat/auth"
// import {initializeApp} from "firebase/firebase-app"
// import   {getFirestore} from "firebase/firestore "

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDqAIM9AWTktlLOrHukb2fmD_0kYI9EZVM",
  authDomain: "back-end-1d037.firebaseapp.com",
  projectId: "back-end-1d037",
  storageBucket: "back-end-1d037.appspot.com",
  messagingSenderId: "1078222327625",
  appId: "1:1078222327625:web:0abbc0687d5907976e9498",
  measurementId: "G-V398ZC4MFH"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
