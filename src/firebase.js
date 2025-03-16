import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDySPYzonKFcbNEc8AIc3LM2YxjDWlgRM",
  authDomain: "kenyan-fantasy-premier-league.firebaseapp.com",
  projectId: "kenyan-fantasy-premier-league",
  storageBucket: "kenyan-fantasy-premier-league.firebasestorage.app",
  messagingSenderId: "812476859312",
  appId: "1:812476859312:web:2f7f89b8ed03ceadf28c75"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "localhost", 8080);
  connectAuthEmulator(auth, "http://localhost:9099");
}