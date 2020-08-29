import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyBICkBO5mSHglgELM9LUE8xwo8pefflEQY",
  authDomain: "portfolio-40105.firebaseapp.com",
  databaseURL: "https://portfolio-40105.firebaseio.com",
  projectId: "portfolio-40105",
  storageBucket: "portfolio-40105.appspot.com",
  messagingSenderId: "162709878543",
  appId: "1:162709878543:web:6f8eb147b27a0e9296707a",
  measurementId: "G-0MCHC9V8KT"
}

export default firebase.initializeApp(firebaseConfig)