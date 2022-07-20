// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_VzbYFlJgH0uk4Aa-xK-SlTmfk0OKNXM",
    authDomain: "cursoreact-coderhouse-c7f08.firebaseapp.com",
    projectId: "cursoreact-coderhouse-c7f08",
    storageBucket: "cursoreact-coderhouse-c7f08.appspot.com",
    messagingSenderId: "1070583168095",
    appId: "1:1070583168095:web:ac8fd036ae7f2171db2fea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);