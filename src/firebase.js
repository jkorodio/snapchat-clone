import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6g92MUnJMxyzAEsSNb4SgnALrTv-K7YI",
  authDomain: "snapchat-clone-bbk.firebaseapp.com",
  projectId: "snapchat-clone-bbk",
  storageBucket: "snapchat-clone-bbk.appspot.com",
  messagingSenderId: "99421723477",
  appId: "1:99421723477:web:974e11cfdb8800676baddc"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };