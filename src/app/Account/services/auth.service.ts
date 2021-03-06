import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Data/Redux/root.reducer';
import { SubSink } from 'subsink';
import { SignInMethodsEnum } from '../enum/sign-in-methods.enum';
import { ACCOUNT_STORE } from '../store/account.reducer';
import * as AccountActions from '../store/account.actions';
import { RouterService } from 'src/app/Core/routes/router.service';
import { MessageService } from 'src/app/Core/message/message.service';
import { AuthFirebaseService } from 'src/app/Data/Firebase/auth.firebase.service';
import { Account } from '../model/account';
import { Unsubscribe } from '@firebase/auth';
import { MessageTypeEnum } from 'src/app/Core/message/message-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subscriptions = new SubSink();
  private unsubscribeFromAuth!: Unsubscribe;
  private _isLoggedIn: boolean = !false;

  constructor(
    private store: Store<AppState>,
    private routerService: RouterService,
    private messageService: MessageService,
    private authFirebaseService: AuthFirebaseService,
  ) {
    this.unsubscribeFromAuth = this.authFirebaseService.onAuthStateChanged(user => {
      if (user) {
        const account = new Account(user.uid);
        this.store.dispatch(new AccountActions.SignInSuccess(account));
      } else {
        this.store.dispatch(new AccountActions.SignOut());
      }
    });

    this.subscriptions.add(this.store.select(ACCOUNT_STORE).subscribe(accountStore => {
      if (this._isLoggedIn !== accountStore?.account?.isLoggedIn) {
        this._isLoggedIn = !!accountStore?.account?.isLoggedIn
        // TODO: find a better way to handle auto login and redirect
        if (this._isLoggedIn) {
          // only switches to app if it is on login page
          if (this.routerService.getRouter().url.match(/^\/account\//)){
            this.routerService.goToApp();
          }
        } else {
          // only switches to login page if it is in the app
          if (this.routerService.getRouter().url.match(/^\/budget\//)){
            this.routerService.goToLogin();
          }
        }
      }
      if (!!accountStore.error) {
        this.handleError(accountStore.error);
        this.store.dispatch(new AccountActions.ClearError());
      }
    }));
  }


  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public signInWithEmail(email: string, password: string) {
    this.store.dispatch(new AccountActions.SignInWithEmail({ email, password }));
  }

  public signInWith(method: SignInMethodsEnum) {
    switch (method) {
      case SignInMethodsEnum.GOOGLE:
        this.store.dispatch(new AccountActions.SignInWithGoogle());
        break;
      case SignInMethodsEnum.FACEBOOK:
        this.store.dispatch(new AccountActions.SignInWithFacebook());
        break;
    }

  }

  public signUp(displayName: string, email: string, password: string) {
    this.store.dispatch(new AccountActions.SignUp({ displayName, email, password }));
  }

  public signOut() {
    this.store.dispatch(new AccountActions.SignOut(true));
  }

  private handleError(error: string) {
    console.warn(error);
    let err;
    switch (error) {
      // signInWithEmailAndPassword
      case 'auth/invalid-email':
        err = 'validate.error.invalidEmail';
        break;
      case 'auth/user-disabled':
        err = 'error.account.userDisabled';
        break;
      case 'auth/too-many-requests':
        err = 'error.account.tooManyRequests';
        break;
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        err = 'error.account.notFound';
        break;
      // createUserWithEmailAndPassword
      case 'auth/email-already-in-use':
        err = 'error.account.emailInUse';
        break;
      case 'auth/invalid-email':
        err = 'validate.error.invalidEmail';
        break;
      case 'auth/operation-not-allowed':
        err = 'error.account.notAllowed';
        break;
      // signInWithPopup
      case 'auth/account-exists-with-different-credential':
        err = 'error.account.emailInUse';
        break;
      case 'auth/popup-closed-by-user':
        err = 'error.account.closedByUser';
        break;
      case 'auth/popup-blocked':
        err = 'error.account.popupBlocked';
        break;

      default:
        err = 'error.account.unknown';
        break;
    }
    this.messageService.showMessage(err, MessageTypeEnum.error);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.unsubscribeFromAuth();
  }
}
