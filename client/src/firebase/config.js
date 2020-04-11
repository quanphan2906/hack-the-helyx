import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAXDjqRhtks4xYcD0qix-gnQKqmCxuhDto",
    authDomain: "hack-the-helyx.firebaseapp.com",
    databaseURL: "https://hack-the-helyx.firebaseio.com",
    projectId: "hack-the-helyx",
    storageBucket: "hack-the-helyx.appspot.com",
    messagingSenderId: "1023972525759",
    appId: "1:1023972525759:web:c0e0f633d9b13c2e6ee80a",
    measurementId: "G-SXZ9WGX5B9",
};

export default (isShowAppName = false) => {
    firebase.initializeApp(firebaseConfig);
    if (isShowAppName) {
        console.log(firebase.app().name);
    }
};
