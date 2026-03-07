import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
// This pattern prevents re-initializing the app on the server.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };