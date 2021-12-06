import { Injectable } from '@angular/core';
import { FirebaseError } from '@firebase/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
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
            const user = userCredential.user;
            console.log(action, user);
            const name = user.displayName || 'User';
            if (user.email) {
              const account = new AccountModel(user.email, name);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/user-not-found', 'TFirebase: Error (auth/user-not-found).');
            }
          }).catch((error: FirebaseError) => {
            console.log(error.code, error.message);
            return new AccountActions.SignInError(error);
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
          const user = userCredential.user;
          const name = user.displayName || "User";
          console.log(action, user);
            if (user.email) {
              const account = new AccountModel(user.email, name);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/user-not-found', 'Firebase: Error (auth/user-not-found).');
            }
          }).catch((error: FirebaseError) => {
            console.log(error.code, error.message);
            return new AccountActions.SignInError(error);
          })
        );
      })
    )
  });

  constructor(private actions$: Actions, private authFirebaseService: AuthFirebaseService) { }
}


// catchError((error: FirebaseError) => {
//   console.log(error.code, error.message);
//   return of(new AccountActions.SignInError(error));
// })
