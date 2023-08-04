import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCanN1bz29UjDiOAaLHex3fApQf9YaoBl4",
    authDomain: "disneyplus-clone-a3d13.firebaseapp.com",
    projectId: "disneyplus-clone-a3d13",
    storageBucket: "disneyplus-clone-a3d13.appspot.com",
    messagingSenderId: "6530604565",
    appId: "1:6530604565:web:7f30e7c9b897b3d0ad381c",
    measurementId: "G-N8VPFWHSLB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;