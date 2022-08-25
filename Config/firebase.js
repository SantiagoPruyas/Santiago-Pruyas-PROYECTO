import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAG4ZjJd3jyyH3_fEtW6vcu1ZwvtNXfW9c",
    authDomain: "santiago-pruyas-proyecto.firebaseapp.com",
    projectId: "santiago-pruyas-proyecto",
    storageBucket: "santiago-pruyas-proyecto.appspot.com",
    messagingSenderId: "918489764951",
    appId: "1:918489764951:web:b993dec2f1cd10bc96bf12"
  };
const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()