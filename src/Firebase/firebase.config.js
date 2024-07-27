// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
//   apiKey: "AIzaSyB4uJ4GdlBsGVA9Jq2i4ZZJYTjUFQpyvuM",
//   authDomain: "cars-doctor-31a06.firebaseapp.com",
//   projectId: "cars-doctor-31a06",
//   storageBucket: "cars-doctor-31a06.appspot.com",
//   messagingSenderId: "37210979838",
//   appId: "1:37210979838:web:c9bfc4dc05a146892f54af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;