require('dotenv').config()

const admin = require('firebase-admin')

function formatPrivateKey(privateKey) {
    return privateKey.replace(/\\n/g, '\n')
}

const params = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    databaseURL: process.env.FIREBASE_DATABASE_URL
}

console.log(params)

const privateKey = formatPrivateKey(params.privateKey)

console.log(privateKey)

const cert = admin.credential.cert({
    projectId: params.projectId,
    privateKey: privateKey,
    clientEmail: params.clientEmail
})

const adminApp = admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    databaseURL: params.databaseURL
})

module.exports = { adminApp }