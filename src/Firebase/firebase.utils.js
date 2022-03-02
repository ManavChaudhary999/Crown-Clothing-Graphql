import firebase from "firebase/compat/app"; // Old Way
//import {initializeApp} from "firebase/app" // New Way

import "firebase/compat/auth"; // Old Way
//import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"; // New Way

import "firebase/compat/firestore"; // Old Way
//import {getFirestore, doc, getDoc, setDoc, Timestamp} from "firebase/firestore"; // New Way

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArbfHNpE5iSOKFPEMXKlCLol3Gun4l7GM",
  authDomain: "clothing-app-ec118.firebaseapp.com",
  projectId: "clothing-app-ec118",
  storageBucket: "clothing-app-ec118.appspot.com",
  messagingSenderId: "854192669561",
  appId: "1:854192669561:web:a8235836417f82f51ae5a8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); // Old Way
//const app = initializeApp(firebaseConfig); // New Way

export const auth = firebase.auth(); // Old Way
//export const auth = getAuth(); // New Way

export const firestore = firebase.firestore();// Old Way
//export const firestore = getFirestore(); // New Way

const provider = new firebase.auth.GoogleAuthProvider(); // Old Way
//const googleProvider = new GoogleAuthProvider(); // New Way

export const signInWithGoogle = () => auth.signInWithPopup(provider); // Old Way
//export const signInWithGoogle = () => signInWithPopup(auth, googleProvider); // New Way


// Adding User Data
export const createUserProfileDocument = async (userAuth, additionalData) => {    
    if(!userAuth) return // user is null or signed out

    const userRef = firestore.doc(`Users/${userAuth.uid}`) // Old Way
    // const userRef = doc(firestore, "Users", userAuth.uid); // New Way
    const userSnap = await userRef.get(); // Old Way
    // const userSnap = await getDoc(userRef); // New Way

    // if (!userSnap.exists()) // New Way
    if (!userSnap.exists) // New User
    {
        const {displayName, email} = userAuth;
        // const createdAt = Timestamp.now();
        const createdAt = new Date();

        const userData = {
            displayName,
            email,
            createdAt,
            ...additionalData
        };

        await userRef.set(userData); // Old Way
        // await setDoc(userRef, userData);// New Way
    }

    return userRef;
};

export const addShopCollectionAndDocument = async (collectionId, objectToAdd) => {
    const collectionRef = firestore.collection(collectionId);
    
    const batch = firestore.batch();

    objectToAdd.forEach(obj => {
        const doc = collectionRef.doc();
        // doc.set(obj); // but this will add only one collection(hats) in one function call, so to overcome that we use batch()
        batch.set(doc, obj);
    });

    return await batch.commit(); // asynchronously will add all the collection;
};

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
    const transformedCollection = collectionsSnapshot.docs.map(doc => {
        const {title, items} = doc.data();

        return{
            id: doc.id,
            title,
            // routeName: title.toLowerCase(), can do this but if name have some special characters than url can't support that
            routeName: encodeURI(title.toLowerCase()), // automatically converts non supported characters to supported characters
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection; // converting from array to object form (data normalization)
        return accumulator;
    }, {}); // initialize value is empty object
};
