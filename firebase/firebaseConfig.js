
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore  } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAllfGDfxCTveorigvXZ3SwZH7n3BfN9WA",
  authDomain: "react-native-cda.firebaseapp.com",
  projectId: "react-native-cda",
  storageBucket: "react-native-cda.appspot.com",
  messagingSenderId: "294016280644",
  appId: "1:294016280644:web:fc03359cc30803ae76b411"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);