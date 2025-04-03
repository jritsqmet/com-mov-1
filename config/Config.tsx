import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyD7vOPNUsrkxTDSERgsDyQnODXMGqMDJNs",
  authDomain: "app-crud-cc090.firebaseapp.com",
  databaseURL: "https://app-crud-cc090-default-rtdb.firebaseio.com",
  projectId: "app-crud-cc090",
  storageBucket: "app-crud-cc090.firebasestorage.app",
  messagingSenderId: "917830128652",
  appId: "1:917830128652:web:40e64d5cd520cd86a00a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)