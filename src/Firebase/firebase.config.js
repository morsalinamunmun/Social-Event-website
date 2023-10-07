// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf2cjdYD_2fUS0ZC38c-XBF2eBF5MWxm4",
  authDomain: "social-events-website-82cdc.firebaseapp.com",
  projectId: "social-events-website-82cdc",
  storageBucket: "social-events-website-82cdc.appspot.com",
  messagingSenderId: "129092376246",
  appId: "1:129092376246:web:cf766adf46d93198c03817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;