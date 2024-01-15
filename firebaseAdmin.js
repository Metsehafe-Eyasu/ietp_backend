require('dotenv').config();

const admin = require('firebase-admin');

console.log('FIREBASE_SERVICE_ACCOUNT:', process.env.FIREBASE_SERVICE_ACCOUNT);

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
const projectId = process.env.FIREBASE_PROJECT_ID
const databaseURL = process.env.FIREBASE_DATABASE_URL

// Initialize Firebase Admin SDK with the credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: projectId,
    databaseURL: databaseURL
});

// Export the initialized Firebase Admin app
module.exports = admin;
