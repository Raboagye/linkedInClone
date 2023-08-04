import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBLY5BZ_DNKLhGzkWNfzdDhm76P63KSVvI",
    authDomain: "linkedin-clone-3b7a5.firebaseapp.com",
    projectId: "linkedin-clone-3b7a5",
    storageBucket: "linkedin-clone-3b7a5.appspot.com",
    messagingSenderId: "127338388661",
    appId: "1:127338388661:web:17498622a2ea43eb50f2fc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
