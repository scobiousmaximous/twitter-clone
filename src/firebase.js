import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcvn2HNNpVOQfP_UpYD-HV-5bCDWYFx1E",
  authDomain: "twitter-clone-cfcc6.firebaseapp.com",
  projectId: "twitter-clone-cfcc6",
  storageBucket: "twitter-clone-cfcc6.appspot.com",
  messagingSenderId: "773131643127",
  appId: "1:773131643127:web:007bf8b001f7a638064bf2",
  measurementId: "G-3Z88HHF22E",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
