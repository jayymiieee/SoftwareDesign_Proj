import 'firebase/compat/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDMf5lx9k7sqYhwSGzeGDp6HHZeXqYGzkA",
  authDomain: "liquid--oasis.firebaseapp.com",
  projectId: "liquid--oasis",
  storageBucket: "liquid--oasis.appspot.com",
  messagingSenderId: "1092185549716",
  appId: "1:1092185549716:web:8cd3c7678573f97d75bd81"
};
const app = firebase.initializeApp(firebaseConfig);
export default app