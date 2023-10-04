// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCObh_LvyADuX6qYH_UKS71b2B5nzbZFFQ",
  authDomain: "client-avaliation.firebaseapp.com",
  projectId: "client-avaliation",
  storageBucket: "client-avaliation.appspot.com",
  messagingSenderId: "382278399538",
  appId: "1:382278399538:web:de0afd9e9a9c14c28d6e2b",
  measurementId: "G-86ZRXFPK7G",
};

export const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const database = getFirestore(app);
