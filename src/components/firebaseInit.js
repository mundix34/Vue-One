import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import { FirebaseApp } from '../../node_modules/@firebase/app-types';
const firebase = firebase.initializeApp
(firebaseConfig)
export default FirebaseApp.firestore()