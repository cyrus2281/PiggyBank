import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { AccountModel } from '../account.model';
import * as AccountActions from './account.actions';

@Injectable()
export class AccountEffects {

  accountSignInWithEmail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.SIGN_IN_WITH_EMAIL_START),
      mergeMap((accountData: AccountActions.SignInWithEmail) => {
        // perform async
        console.log(accountData);
        return of(new AccountModel(accountData.payload.email, 'Cyrus')).pipe(
          map(resData => {
            return new AccountActions.SignInWithEmailSuccess(resData);
          }),
          catchError(error => {
            // handle error
            return of(new AccountActions.SignInWithEmailError(error));
          }))
      })
    )
  });

  constructor(private actions$: Actions) { }
}
