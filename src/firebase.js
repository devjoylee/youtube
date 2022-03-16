import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB2OYF4YmThZ3id4IZQ1q2_CEAtp6Wpoo4',
  authDomain: 'utube-page.firebaseapp.com',
  projectId: 'utube-page',
  storageBucket: 'utube-page.appspot.com',
  messagingSenderId: '579883225237',
  appId: '1:579883225237:web:c8583ac51269e8f78f8b9c',
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
