const functions = require('firebase-functions')
const admin = require('firebase-admin')
const serviceAccount = require('./service-account-key.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})
const db = admin.firestore()

const getHash = () => ((Number(new Date)) + Math.random()* 100).toString(32)

exports.createEndpoint = functions.https.onRequest((request, response) => {
  const authCode = request.body.authCode
  const endpoint = getHash()
  const docRef = db.collection('credentials').doc(endpoint)
  const setCredentials = docRef.set({
    authCode: authCode
  });
  response.json({ endpoint: endpoint })
})

exports.auth = functions.https.onRequest((request, response) => {
  const authCode = request.body.authCode
  const endpoint = request.params[0]
  const docRef = db.collection('credentials').doc(endpoint)
  const getCredentials = docRef.get()
    .then(doc => {
      if (doc.data().authCode === authCode) {
        return response.json({ success: true })
      }
      return response.json({ success: false })
    })
})
