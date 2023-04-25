const firebaseConfig = {
  apiKey: "AIzaSyCsUGjFG0mRf0CaX0mw-oCtSPftPkKrFNk",
  authDomain: "quillchat-30e34.firebaseapp.com",
  databaseURL: "https://quillchat-30e34-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quillchat-30e34",
  storageBucket: "quillchat-30e34.appspot.com",
  messagingSenderId: "1035018230540",
  appId: "1:1035018230540:web:981d388aec5164137b4729"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();