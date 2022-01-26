import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  } // unit test

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  } //get callback function

  logout() {
    firebaseApp.auth().signOut();
  }
}

export default AuthService;
