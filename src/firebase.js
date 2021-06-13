import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey:"AIzaSyCDZzYIHyoD4l7Wo9Tjma3rgGfTBHuNCt4",
    authDomain: "bootcamp-25600.firebaseapp.com",
    projectId: "bootcamp-25600",
    storageBucket: "bootcamp-25600.appspot.com",
    messagingSenderId: "853140846017",
    appId:"1:853140846017:web:b57c700d7bfd138d4deb40",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
// const functions = firebase.functions()
export{db,auth}