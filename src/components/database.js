import * as firebase from 'firebase';
import firestore from 'firebase/firestore'



const settings = {timestampsInSnapshots: true};
const  config = {
    apiKey: "AIzaSyAtprwA_ULM85yGUaRpieuS94DYnx2sygo",
    authDomain: "aplv1-bf796.firebaseapp.com",
    databaseURL: "https://aplv1-bf796.firebaseio.com",
    projectId: "aplv1-bf796",
    storageBucket: "aplv1-bf796.appspot.com",
    messagingSenderId: "299957629111"
  };

  
  firebase.initializeApp(config);
  firebase.firestore().settings(settings);



  export default firebase ;

  

