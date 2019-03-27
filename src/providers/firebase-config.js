import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCVs7BNPSnGRdJWRzRiKzXwGkqaybfHPCw",
    authDomain: "bq-firebase.firebaseapp.com",
    databaseURL: "https://bq-firebase.firebaseio.com",
    projectId: "bq-firebase",
    storageBucket: "bq-firebase.appspot.com",
    messagingSenderId: "159268694498"
});

export default firebase;