// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt8q0WHD88FCsbfDqVWW40y4dThSVoYcI",
  authDomain: "eventio-19099.firebaseapp.com",
  projectId: "eventio-19099",
  storageBucket: "eventio-19099.appspot.com",
  messagingSenderId: "805126509956",
  appId: "1:805126509956:web:d1085f581e0e5ed72939d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app); 


// Negocio usuario nao funciona

// export const firestore = firebase.firestore();
// export const createUserDocument = async (user, additionalData) => {
//   if (!user) return; 

//   const userRef = firestore.doc(`user/${user.uid}`);
//   const snapshot = await userRef.get();

//   if(!snapshot.exists) {
//     const {email} = user;
//     const {username} = additionalData;

//     try{
//       userRef.set({
//         username,
//         email,
//         createdAt: new Date()
//       });
//     } catch(eroor) {
//       console.log('Error creating the account', error)
//     }
//   }
// }