// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDoZxSfpQV2LCWRkz-nnqYTGp7aJkZ7vsY',
    authDomain: 'astrology-24-5af0e.firebaseapp.com',
    projectId: 'astrology-24-5af0e',
    storageBucket: 'astrology-24-5af0e.appspot.com',
    messagingSenderId: '70404464199',
    appId: '1:70404464199:web:20b31d0011d18e3bd91b62'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;