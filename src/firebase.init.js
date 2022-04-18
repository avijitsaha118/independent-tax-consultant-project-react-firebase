// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu1NAGW74rLSYD4nYlmceC4uI0HuZOzCA",
    authDomain: "independent-tax-consultant.firebaseapp.com",
    projectId: "independent-tax-consultant",
    storageBucket: "independent-tax-consultant.appspot.com",
    messagingSenderId: "246512713251",
    appId: "1:246512713251:web:d1d800ca399d7666ac7b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;