import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  } // unit test

  logout() {
    firebaseApp.auth().signOut();
  }
}

export default AuthService;
