import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGIItqAiUjm_3x8f6vA9Sy2jle703Vo0I",
  authDomain: "facebook-messenger-clone-c1d4a.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-c1d4a.firebaseio.com",
  projectId: "facebook-messenger-clone-c1d4a",
  storageBucket: "facebook-messenger-clone-c1d4a.appspot.com",
  messagingSenderId: "925912262152",
  appId: "1:925912262152:web:921be66763b7445333d3bd",
  measurementId: "G-0V3QBZYP40",
});

const db = firebaseApp.firestore();
export default db;
