import firebase from 'firebase'
import {useAuth} from '@vueuse/firebase'
import 'firebase/auth'
import {firebaseConfig} from '../config/firebase'

firebase.initializeApp(firebaseConfig)
const {auth} = firebase
const {GoogleAuthProvider} = auth

const {isAuthenticated, user} = useAuth()

export const authentication = () => {
    const googlePopUp = () => auth().signInWithPopup(new GoogleAuthProvider())
    const signOut = () => auth().signOut()
    return { googlePopUp, signOut,isAuthenticated,user} 
}

export const database = () => {

}
