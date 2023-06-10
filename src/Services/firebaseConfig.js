import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBoWiczWkGsr-KcvYo9L2BfNKVdWAObKsw",
    authDomain: "proyectocoderreact-f3a41.firebaseapp.com",
    projectId: "proyectocoderreact-f3a41",
    storageBucket: "proyectocoderreact-f3a41.appspot.com",
    messagingSenderId: "493128069187",
    appId: "1:493128069187:web:618845d409875c103b24f6"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export default db;