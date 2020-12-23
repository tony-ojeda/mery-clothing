import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDYGMU2vkSK9ku0283PXS05QzxPBHN6OFw",
    authDomain: "mery-db.firebaseapp.com",
    projectId: "mery-db",
    storageBucket: "mery-db.appspot.com",
    messagingSenderId: "223962953987",
    appId: "1:223962953987:web:13fc2c21f5c622d7ee1136",
    measurementId: "G-JD1PR6LLEM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
