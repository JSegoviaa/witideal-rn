import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCVzD2DnsLYxkD5sNF_IOSF24h5r6JiR9o',
  authDomain: 'witideal-b1f99.firebaseapp.com',
  databaseURL: 'https://witideal-b1f99.firebaseio.com',
  projectId: 'witideal-b1f99',
  storageBucket: 'witideal-b1f99.appspot.com',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default { firebase, db };
