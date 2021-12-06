import { Injectable } from '@angular/core';
import { getFirestore, Firestore, doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  Auth, onAuthStateChanged, updateProfile, sendEmailVerification, updatePassword, User,
  sendPasswordResetEmail, deleteUser, reauthenticateWithCredential, AuthCredential, signOut, UserCredential } from "firebase/auth";
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  private auth!: Auth;
  private firestore!: Firestore;


  constructor(private firebaseService: FirebaseService) {
    this.auth = getAuth();
    this.firestore = firebaseService.firestore;
   }


  createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut(){
    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  onAuthStateChanged() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  createUserProfileDocument = async (userAuth: User, additionalData: any) => {
    if (!userAuth) return;
    let userRef = doc(this.firestore, `users`, userAuth.uid);
    const snapShot = await getDoc(userRef);
    if (!snapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userRef, {
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("error creating user", (<Error> error).message);
      }
    }
    return userRef;
  };

  updateProfile() {
    if (this.auth.currentUser) {
      updateProfile(this.auth.currentUser, {
        displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }
  }


  sendEmailVerification() {
    if (this.auth.currentUser) {
      sendEmailVerification(this.auth.currentUser)
        .then(() => {
          // Email verification sent!
          // ...
        });
    }
  }

  updatePassword(user: User, newPassword: string) {
    updatePassword(user, newPassword).then(() => {
      // Update successful.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
  }

  sendPasswordResetEmail(email: string) {
    sendPasswordResetEmail(this.auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  deleteUser(user: User){
    deleteUser(user).then(() => {
      // User deleted.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
  }

  reauthenticateWithCredential(user: User, credential: AuthCredential) {
    if (this.auth.currentUser) {
      reauthenticateWithCredential(user, credential).then(() => {
        // User re-authenticated.
      }).catch((error) => {
        // An error ocurred
        // ...
      });
    }
  }
}
