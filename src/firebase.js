import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA1T_E77J8952Xdaa05YifXDVSAsf-k39M",
  authDomain: "portfolio-aman-d7c1a.firebaseapp.com",
  projectId: "portfolio-aman-d7c1a",
  storageBucket: "portfolio-aman-d7c1a.appspot.com",
  messagingSenderId: "264014327711",
  appId: "1:264014327711:web:afe2dc88ff9c75c30f57aa"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()