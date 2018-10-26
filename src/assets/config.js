import firebase from "firebase"

var config = {
  apiKey: "AIzaSyBYgAs7mEYge9jp4qIgLYakEJ3r6QpnJYo",
  authDomain: "kanban-e4b90.firebaseapp.com",
  databaseURL: "https://kanban-e4b90.firebaseio.com",
  projectId: "kanban-e4b90",
  storageBucket: "kanban-e4b90.appspot.com",
  messagingSenderId: "789283604759"
};
firebase.initializeApp(config);

const database = firebase.database()

export default database