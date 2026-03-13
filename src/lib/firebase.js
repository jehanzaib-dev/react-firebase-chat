
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b7a23.firebaseapp.com",
  projectId: "reactchat-b7a23",
  storageBucket: "reactchat-b7a23.firebasestorage.app",
  messagingSenderId: "369298487594",
  appId: "1:369298487594:web:d8404e947f68f73e764653"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore();

