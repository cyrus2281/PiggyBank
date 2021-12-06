import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from 'firebase/firestore/lite';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firebaseConfig = {
    apiKey: "AIzaSyBTTI9wGuXgS0_YRZER2fVXAwTWwOx_P34",
    authDomain: "piggy-bank-web.firebaseapp.com",
    projectId: "piggy-bank-web",
    storageBucket: "piggy-bank-web.appspot.com",
    messagingSenderId: "105866149322",
    appId: "1:105866149322:web:29602037e86a14979fa333",
    measurementId: "G-C84DJ46VNQ"
  };

  private firebaseApp !: FirebaseApp;
  private analytics!: Analytics;
  private _firestore!: Firestore;


  constructor() {
    // Initialize Firebase
    this.firebaseApp = initializeApp(this.firebaseConfig);
    this.analytics = getAnalytics(this.firebaseApp);
    this._firestore = getFirestore(this.firebaseApp);
  }

  public get firestore(){
      return this._firestore;
  }

}
