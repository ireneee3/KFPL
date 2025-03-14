import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDDySPYzonKFcbNEc8AIc3LM2YxjDWlgRM",
  authDomain: "kenyan-fantasy-premier-league.firebaseapp.com",
  projectId: "kenyan-fantasy-premier-league",
  storageBucket: "kenyan-fantasy-premier-league.appspot.com",
  messagingSenderId: "812476859312",
  appId: "1:812476859312:web:2f7f89b8ed03ceadf28c75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(" Firebase Initialized:", app);

// Initialize Firestore
const db = getFirestore(app);
console.log(" Firestore Initialized:", db);

// Fetch Data from 'users' Collection
const colRef = collection(db, "Users");

getDocs(colRef)
  .then((snapshot) => {
    if (snapshot.empty) {
      console.warn(" No documents found in Firestore!");
    } else {
      console.log("Fetched Data from Firestore:");
      snapshot.docs.forEach((doc) => {
        console.log(` Document ID: ${doc.id}`, doc.data());
      });
    }
  })
  .catch((error) => {
    console.error(" Error fetching data:", error.message);
  });

