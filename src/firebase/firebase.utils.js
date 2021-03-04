import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-Z2UOvFVX5d_6bHYJjPQrjDPvx_irtPc",
  authDomain: "foodle-84109.firebaseapp.com",
  projectId: "foodle-84109",
  storageBucket: "foodle-84109.appspot.com",
  messagingSenderId: "531630082956",
  appId: "1:531630082956:web:671aff027538d94988a4a9",
  measurementId: "G-BR4FEZCMLC",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user: ", error.message);
    }
  }
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default db;
