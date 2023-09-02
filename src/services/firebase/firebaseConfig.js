
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFID } from "web-vitals";




const firebaseConfig = {
  apiKey: "AIzaSyDUnbuYqI05okYPWIvVSWzDpBs0-5vLKOI",
  authDomain: "proyecto-final-herrero-matias.firebaseapp.com",
  projectId: "proyecto-final-herrero-matias",
  storageBucket: "proyecto-final-herrero-matias.appspot.com",
  messagingSenderId: "1051555353980",
  appId: "1:1051555353980:web:f472ec644f363c913740f9",
  measurementId: "G-X9JB218QJK"
};

const app = initializeApp(firebaseConfig);
const analytics = getFirestore(app);

export const db = getFirestore(app)