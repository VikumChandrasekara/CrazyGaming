import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyD9T5kJl2f-RUrqEJUd5FvzIOeHIpT6iQI",
    authDomain: "crazy-gaming-db195.firebaseapp.com",
    projectId: "crazy-gaming-db195",
    storageBucket: "crazy-gaming-db195.appspot.com",
    messagingSenderId: "921377717606",
    appId: "1:921377717606:web:b38bf09df0ae9883eb5ca7"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataref = firebase.database();
  export default firebase