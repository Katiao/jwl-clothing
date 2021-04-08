import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCkEKiHwWDZtlBVTa0SSDHKyXapqp8v_d0',
	authDomain: 'jwl-db.firebaseapp.com',
	projectId: 'jwl-db',
	storageBucket: 'jwl-db.appspot.com',
	messagingSenderId: '147989372406',
	appId: '1:147989372406:web:9716fb3e290aadbba57bd7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
