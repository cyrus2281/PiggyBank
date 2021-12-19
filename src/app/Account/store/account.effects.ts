import { Injectable } from '@angular/core';
import { FirebaseError } from '@firebase/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { MessageTypeEnum } from 'src/app/Core/message/message-type.enum';
import { MessageService } from 'src/app/Core/message/message.service';
import { AuthFirebaseService } from 'src/app/Data/Firebase/auth.firebase.service';
import { Account } from '../model/account';
import * as AccountActions from './account.actions';

@Injectable()
export class AccountEffects {

  accountSignInWithEmail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.SIGN_IN_WITH_EMAIL_START),
      mergeMap((action: AccountActions.SignInWithEmail) => {
        const loading = this.messageService.showMessage('signin.loading', MessageTypeEnum.loading);
        return from(this.authFirebaseService.signInWithEmailAndPassword(action.payload.email, action.payload.password)
          .then((userCredential) => {
            loading.close();
            if (userCredential.user.uid) {
              this.messageService.showMessage('signin.success', MessageTypeEnum.success);
              const account = new Account(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
            loading.close();
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
        const loading = this.messageService.showMessage('signin.loading', MessageTypeEnum.loading);
        return from(this.authFirebaseService.signInWithGoogle()
          .then((userCredential) => {
            loading.close();
            if (userCredential.user.uid) {
              this.messageService.showMessage('signin.success', MessageTypeEnum.success);
              const account = new Account(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
            loading.close();
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
        const loading = this.messageService.showMessage('signin.loading', MessageTypeEnum.loading);
        return from(this.authFirebaseService.signInWithFacebook()
          .then((userCredential) => {
            loading.close();
            if (userCredential.user.uid) {
              this.messageService.showMessage('signin.success', MessageTypeEnum.success);
              const account = new Account(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
            loading.close();
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
        const loading = this.messageService.showMessage('signup.loading', MessageTypeEnum.loading);
        return from(this.authFirebaseService.createUserWithEmailAndPassword(action.payload.email, action.payload.password)
          .then((userCredential) => {
            loading.close();
            if (userCredential.user.uid) {
              this.messageService.showMessage('signup.success', MessageTypeEnum.success);
              const account = new Account(userCredential.user.uid);
              return new AccountActions.SignInSuccess(account);
            } else {
              throw new FirebaseError('auth/unknown', 'An unknown error occurred!');
            }
          }).catch((error: FirebaseError) => {
            loading.close();
            return new AccountActions.ShowError(error.code);
          })
        );
      })
    )
  });

  accountSignOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.SIGN_OUT_START),
      mergeMap((action: AccountActions.SignOut) => {
        return from(this.authFirebaseService.signOut()
          .then(() => {
            if (action.payload) {
              this.messageService.showMessage('signout.success', MessageTypeEnum.success, {id:'signout.success'});
            }
            return new AccountActions.SignOutSuccess();
          }).catch((error: FirebaseError) => {
            return new AccountActions.ShowError(error.code);
          })
        );
      })
    )
  });

  constructor(private actions$: Actions, private authFirebaseService: AuthFirebaseService, private messageService: MessageService) { }
}
