import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDmuhrJGxZPf6nTdWKtgLDvDXAGT3E0tRE",
    authDomain: "floatfileupload.firebaseapp.com",
    databaseURL: "https://floatfileupload.firebaseio.com",
    projectId: "floatfileupload",
    storageBucket: "floatfileupload.appspot.com",
    messagingSenderId: "72201723425",
    appId: "1:72201723425:web:34b82c124f6e3a04f84d60",
    measurementId: "G-LVQJVQKMXV"
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }
