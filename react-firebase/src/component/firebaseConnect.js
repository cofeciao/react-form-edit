import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDqKz1S29kpymLbzktLlOVeoGLgYnmtm9U",
    authDomain: "noteproject-a3d55.firebaseapp.com",
    databaseURL: "https://noteproject-a3d55-default-rtdb.firebaseio.com",
    projectId: "noteproject-a3d55",
    storageBucket: "noteproject-a3d55.appspot.com",
    messagingSenderId: "648294352496",
    appId: "1:648294352496:web:0b5e8d9751117bf0e956b5",
    measurementId: "G-5ECX6S0XSB"
};
// Initialize Firebase
export const firebaseConnect = firebase.initializeApp(firebaseConfig);
var data = firebase.database().ref('noteList/' );
//     data.once('value').then((snapshot) => {
//          snapshot.val();
// });