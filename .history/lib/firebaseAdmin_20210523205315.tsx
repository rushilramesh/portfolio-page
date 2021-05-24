import admin from "firebase-admin"
const serviceAcc = require( "../secret.json")

export const verifyIdToken = token => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAcc),
            databaseURL: "https://nextjs-with-firebaseauth-69fb7.firebaseio.com"
        })
    } 

    return admin.auth().verifyIdToken(token).catch(error => {throw error})
}