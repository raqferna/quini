import admin from 'firebase-admin';

// Get the credentials from the environment variable
const serviceAccount = JSON.parse(import.meta.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);

// Initialize the app if it hasn't been already
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

// Get the firestore instance
const db = admin.firestore();

export { db };
