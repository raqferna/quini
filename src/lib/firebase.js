import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcldQYjIqVD3BPwRyzocfDTE3Cktxos4s",
  authDomain: "quini-cms.firebaseapp.com",
  projectId: "quini-cms",
  storageBucket: "quini-cms.firebasestorage.app",
  messagingSenderId: "465095637451",
  appId: "1:465095637451:web:f12b9f8b1a93a5ca04de4e",
  measurementId: "G-JFW8CXXZ0H"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
