// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAESdKctlIolM9yp_mvYLOcr0y7gr-EUew",
   authDomain: "farebd-9.firebaseapp.com",
   projectId: "farebd-9",
   storageBucket: "farebd-9.appspot.com",
   messagingSenderId: "79218585486",
   appId: "1:79218585486:web:9fc5f773ba31456e2c7edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app