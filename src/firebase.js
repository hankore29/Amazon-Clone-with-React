// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDmeh516xLCaxXeqHWSDfatofBAf1SIYN4",
    authDomain: "clone-e109b.firebaseapp.com",
    projectId: "clone-e109b",
    storageBucket: "clone-e109b.appspot.com",
    messagingSenderId: "677360977667",
    appId: "1:677360977667:web:cd52900f1cd32a2cc5cb36",
    measurementId: "G-65Y46GJVD5"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };