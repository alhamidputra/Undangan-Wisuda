// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCL7PjhQFfU_527-0qRQSZabffoxUvRL-M",
  authDomain: "undangan-wisuda-al.firebaseapp.com",
  projectId: "undangan-wisuda-al",
  storageBucket: "undangan-wisuda-al.firebasestorage.app",
  messagingSenderId: "836790173166",
  appId: "1:836790173166:web:2682f142916db74041a2ff"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot
};
