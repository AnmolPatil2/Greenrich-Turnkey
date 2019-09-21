import firebase from "@firebase/app";




// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBTvNJTW3GL9o30LSXvJD5sCSXmlVx-9BI",
    authDomain: "greenrich-turnkey.firebaseapp.com",
    databaseURL: "https://greenrich-turnkey.firebaseio.com",
    projectId: "greenrich-turnkey",
    storageBucket: "",
    messagingSenderId: "511950665999",
    appId: "1:511950665999:web:1f430020e462fc29f7267a"
};
const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { fb, db };