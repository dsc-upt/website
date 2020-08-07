import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyApB04_-2R3jflCtAL4-9T_DO_qE5ngT4k",
    authDomain: "dsc-upt.firebaseapp.com",
    databaseURL: "https://dsc-upt.firebaseio.com",
    projectId: "dsc-upt",
    storageBucket: "dsc-upt.appspot.com",
    messagingSenderId: "1004294201218",
    appId: "1:1004294201218:web:d46e92c65cb171d756399b",
    measurementId: "G-CDKMWCKB9J"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs: !0}).catch(() => {
    console.warn("DB offline support not available")
})
export default {
    notificationSupported: firebase.messaging.isSupported(),
    messaging: (firebase.messaging.isSupported()) ? firebase.messaging() : null,
    firestore: firebase.firestore(),
    auth: firebase.auth(),
    storage: firebase.storage(),
};
