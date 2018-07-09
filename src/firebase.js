import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyD3IIYWIt7ElIUXckn4OT7uWBP0tSDfLmc",
  authDomain: "tembakan-3ad72.firebaseapp.com",
  databaseURL: "https://tembakan-3ad72.firebaseio.com",
  projectId: "tembakan-3ad72",
  storageBucket: "tembakan-3ad72.appspot.com",
  messagingSenderId: "435280072774"
})

export const db = app.database()
export const playersDb = db.ref('players')
export const obstaclesDb = db.ref('obstacles')