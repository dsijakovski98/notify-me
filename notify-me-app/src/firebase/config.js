import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
apiKey: process.env.REACT_APP_FB_API_KEY,
authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
projectId: process.env.REACT_APP_FB_PROJECT_ID,
storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP_FB_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const Timestamp = firebase.firestore.Timestamp;

export { firestore, storage, auth, firebase, Timestamp };