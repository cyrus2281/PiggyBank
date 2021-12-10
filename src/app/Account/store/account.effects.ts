import { Injectable } from '@angular/core';
import { FirebaseError } from '@firebase/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from } from 'rxjs';
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
        return from(this.authFirebaseService.signInWithEmailAndPassword(action.payload.email, action.payload.password)
          .then((userCredential) => {
            if (userCredential.user.uid) {
              const account = new AccountModel(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
            return new AccountActions.ShowError(error.code);
          })
        );
      })
    )
  });

  accountSignInWithGoogle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.SIGN_IN_WITH_GOOGLE_START),
      mergeMap(() => {
        return from(this.authFirebaseService.signInWithGoogle()
          .then((userCredential) => {
            if (userCredential.user.uid) {
              const account = new AccountModel(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
            return new AccountActions.ShowError(error.code);
          })
        );
      })
    )
  });

  accountSignInWithFacebook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.SIGN_IN_WITH_FACEBOOK_START),
      mergeMap(() => {
        return from(this.authFirebaseService.signInWithFacebook()
          .then((userCredential) => {
            if (userCredential.user.uid) {
              const account = new AccountModel(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
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
            if (userCredential.user.uid) {
              const account = new AccountModel(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
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
            return new AccountActions.ShowError(error.code);
          })
        );
      })
    )
  });

  constructor(private actions$: Actions, private authFirebaseService: AuthFirebaseService) { }
}
