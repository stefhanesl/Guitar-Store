// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASH6W34PKFBe8X5i8_cCxU4FTsLaueouk",
  authDomain: "tienda-musica-b6795.firebaseapp.com",
  projectId: "tienda-musica-b6795",
  storageBucket: "tienda-musica-b6795.appspot.com",
  messagingSenderId: "358760443335",
  appId: "1:358760443335:web:d6c3ea7a4c2b69e5103de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
