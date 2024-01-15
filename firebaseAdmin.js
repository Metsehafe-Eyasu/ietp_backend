require('dotenv').config();

const admin = require('firebase-admin');

const params = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    databaseURL: process.env.FIREBASE_DATABASE_URL
};

// Log the parameters to ensure they are correctly loaded
console.log(params);

// Create a new line regex for the private key replacement
const newLineRegex = /\\n/g;

// Replace the newlines in the private key
const formattedPrivateKey = params.privateKey.replace(newLineRegex, '\n');

// Log the formatted private key
console.log(formattedPrivateKey);

// Create Firebase Admin SDK credentials using the formatted private key
const cert = admin.credential.cert({
    projectId: params.projectId,
    privateKey: params.privateKey,
    clientEmail: params.clientEmail
});

// Initialize Firebase Admin SDK with the credentials
const adminApp = admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    databaseURL: params.databaseURL
});

// Export the initialized Firebase Admin app
module.exports = { adminApp };
