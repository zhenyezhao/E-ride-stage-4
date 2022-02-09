import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCs2qrYBHsgEsKd0DrCqWzyriW_9DOexNg",
    authDomain: "wireless---buzzer-a8f97.firebaseapp.com",
    databaseURL: "https://wireless---buzzer-a8f97-default-rtdb.firebaseio.com",
    projectId: "wireless---buzzer-a8f97",
    storageBucket: "wireless---buzzer-a8f97.appspot.com",
    messagingSenderId: "613579294369",
    appId: "1:613579294369:web:a2f359948b695cc79212e0"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


