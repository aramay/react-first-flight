import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBBZofzx26KPzs3XnADNXahK3TAjOPQ_pc',
  authDomain: 'first-flight-45d7d.firebaseapp.com',
  databaseURL: 'https://first-flight-45d7d.firebaseio.com',
  storageBucket: 'first-flight-45d7d.appspot.com',
  messagingSenderId: '711608421630'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
