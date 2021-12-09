import { Injectable } from '@angular/core';
import { FirebaseError } from '@firebase/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthFirebaseService } from 'src/app/Data/Firebase/auth.firebase.service';
import { AccountModel } from '../account.model';
import * as AccountActions from './account.actions';

@Injectable()
export class AccountEffects {

  accountSignInWithEmail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.SIGN_IN_WITH_EMAIL_START),
      mergeMap((action: AccountActions.SignInWithEmail) => {
        console.log(action);
        return from(this.authFirebaseService.signInWithEmailAndPassword(action.payload.email, action.payload.password)
          .then((userCredential) => {
            console.log(action, userCredential.user);
            if (userCredential.user.uid) {
              const account = new AccountModel(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
            console.log(error.code, error.message);
            return new AccountActions.ShowError(error.code);
          })
        );
      })
    )
  });

  accountSignUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.SIGN_UP_START),
      mergeMap((action: AccountActions.SignUp) => {
        return from(this.authFirebaseService.createUserWithEmailAndPassword(action.payload.email, action.payload.password)
          .then((userCredential) => {
            console.log(action, userCredential.user);
            if (userCredential.user.uid) {
              const account = new AccountModel(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
            console.log(error.code, error.message);
            return new AccountActions.ShowError(error.code);
          })
        );
      })
    )
  });

  accountSignOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.SIGN_OUT_START),
      mergeMap(() => {
        return from(this.authFirebaseService.signOut()
          .then(() => {
            return new AccountActions.SignOutSuccess();
          }).catch((error: FirebaseError) => {
            console.log(error.code, error.message);
            return new AccountActions.ShowError(error.code);
          })
        );
      })
    )
  });

  constructor(private actions$: Actions, private authFirebaseService: AuthFirebaseService) { }
}
