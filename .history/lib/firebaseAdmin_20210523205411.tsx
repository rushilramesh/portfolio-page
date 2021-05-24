import admin from "firebase-admin"
const serviceAcc = require( "../secret.json")

export const verifyIdToken = token => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAcc),
        })
    } 

    return admin.auth().verifyIdToken(token).catch(error => {throw error})
}