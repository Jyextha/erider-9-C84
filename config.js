import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDAZJcMRP6zR5NMyLci6NpfJbv6MMWZvbk",
  authDomain: "erider-firestore.firebaseapp.com",
  projectId: "erider-firestore",
  storageBucket: "erider-firestore.appspot.com",
  messagingSenderId: "939407526072",
  appId: "1:939407526072:web:91aa433ba36dad509a0c4d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
