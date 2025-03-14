import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDySPYzonKFcbNEc8AIc3LM2YxjDWlgRM",
  authDomain: "kenyan-fantasy-premier-league.firebaseapp.com",
  projectId: "kenyan-fantasy-premier-league",
  storageBucket: "kenyan-fantasy-premier-league.appspot.com",
  messagingSenderId: "812476859312",
  appId: "1:812476859312:web:2f7f89b8ed03ceadf28c75",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
