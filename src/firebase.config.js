import { getApps , getApp , initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA1C8aoHzf0RdrQBcrdiAbVPBhsOs_zvxs",
    authDomain: "food-delivery-app-646d4.firebaseapp.com",
    databaseURL: "https://food-delivery-app-646d4-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-646d4",
    storageBucket: "food-delivery-app-646d4.appspot.com",
    messagingSenderId: "720485303888",
    appId: "1:720485303888:web:114d595347c536cb8ff355"
};

const app = getApps.length > 0 ? getApp() : initializeApp( firebaseConfig );

const firestore = getFirestore();
const storage = getStorage();

export { app , firestore , storage };