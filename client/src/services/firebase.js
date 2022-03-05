import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDIX2LuqJlDcO9YTcE1NQTEwMSHvhXMY_0",
  authDomain: "pride-world-fcac0.firebaseapp.com",
  projectId: "pride-world-fcac0",
  storageBucket: "pride-world-fcac0.appspot.com",
  messagingSenderId: "646555784216",
  appId: "1:646555784216:web:fb46076a1bcaa7a845df6d"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth, app }
