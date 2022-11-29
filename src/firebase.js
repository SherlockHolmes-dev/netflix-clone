import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNfgDa5ZffLjCDkOv8-XhHiToDt3wthtE",
  authDomain: "netflix-clone-aaf1c.firebaseapp.com",
  projectId: "netflix-clone-aaf1c",
  storageBucket: "netflix-clone-aaf1c.appspot.com",
  messagingSenderId: "328687526306",
  appId: "1:328687526306:web:57e5fbd29927e7a57c12fb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
