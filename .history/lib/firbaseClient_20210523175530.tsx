import firebase from "firebase";

const FIREBASE_CONFIG = {
 
    apiKey: "AIzaSyAFW6nAw4Bdvi4IfhBQuzX2gqxUueCfEbo",
    authDomain: "nextjs-with-firebaseauth-69fb7.firebaseapp.com",
    projectId: "nextjs-with-firebaseauth-69fb7",
    storageBucket: "nextjs-with-firebaseauth-69fb7.appspot.com",
    messagingSenderId: "379624332736",
    appId: "1:379624332736:web:03ed39a27926cfeca13c25"

}

const firebaseClient = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG)
    }
}

export default firebaseClient