import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAij92mrJJ9Jn3_SrlY3uEINfGqHLm2u70",
    authDomain: "volunteer-finder-d9655.firebaseapp.com",
    projectId: "volunteer-finder-d9655",
    storageBucket: "volunteer-finder-d9655.appspot.com",
    messagingSenderId: "91306971725",
    appId: "1:91306971725:web:da7939fde1a9483620c204",
    measurementId: "G-HE7FH2NJJK"
};
firebase.initializeApp(firebaseConfig);
export default firebase;