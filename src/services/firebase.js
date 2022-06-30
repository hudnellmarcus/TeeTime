import firebase from 'firebase/app'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyCrmUbTG7rCNG6F057Qc6c-SJ2NfwPxccI",
    authDomain: "teetime-98686.firebaseapp.com",
    projectId: "teetime-98686",
    storageBucket: "teetime-98686.appspot.com",
    messagingSenderId: "1002333321086",
    appId: "1:1002333321086:web:dd3c695528098a8e99e52f"
  };

firebase.initializeApp(config); 

// Provider setup 
const auth = firebase.auth();

function getProviders() {
const googleProvider = new firebase.auth.GoogleAuthProvider();
const emailProvider = new firebase.auth.EmailAuthProvider(); 
}

function login() {
    return auth.signInWithPopup(getProviders());
}

function logout() {
    return auth.signOut()
};

export { auth, login, logout }

