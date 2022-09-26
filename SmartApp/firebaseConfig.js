import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "insert your own Firebase project info here",
    authDomain: "insert your own Firebase project info here",
    projectId: "insert your own Firebase project info here",
    storageBucket: "insert your own Firebase project info here",
    messagingSenderId: "insert your own Firebase project info here",
    appId: "insert your own Firebase project info here",
    measurementId: "insert your own Firebase project info here"
  };

let myApp = initializeApp(firebaseConfig);
export let firestore = getFirestore(myApp);
