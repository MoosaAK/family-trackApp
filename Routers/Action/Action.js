// import * as React from 'react';
import * as firebase from "firebase"
// import Signup from '..//Account/Signup'



var config = {
      apiKey: "AIzaSyAAYo-gpKFDrD8mydUupveFK6hXcLHW4m0",
    authDomain: "gpstracker-9414a.firebaseapp.com",
    databaseURL: "https://gpstracker-9414a.firebaseio.com",
    projectId: "gpstracker-9414a",
    storageBucket: "",
    messagingSenderId: "546186649203",
    appId: "1:546186649203:web:ae69ac2aa9ba868821d406"
  };
  const fire = firebase.initializeApp(config);
  export default fire;