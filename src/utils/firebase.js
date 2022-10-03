import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyASH6W34PKFBe8X5i8_cCxU4FTsLaueouk",
  authDomain: "tienda-musica-b6795.firebaseapp.com",
  projectId: "tienda-musica-b6795",
  storageBucket: "tienda-musica-b6795.appspot.com",
  messagingSenderId: "358760443335",
  appId: "1:358760443335:web:d6c3ea7a4c2b69e5103de2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
