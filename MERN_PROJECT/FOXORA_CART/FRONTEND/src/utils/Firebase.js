import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "foxoracart.firebaseapp.com",
  projectId: "foxoracart",
  storageBucket: "foxoracart.firebasestorage.app",
  messagingSenderId: "583659328625",
  appId: "1:583659328625:web:3df0455302faf15e5eb7d0",
  measurementId: "G-4KRJP8FVXH"
};
console.log("API KEY 👉", import.meta.env.VITE_API_KEY);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider =new GoogleAuthProvider()

export {auth,provider}