import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as AccountActions from './account.actions';

@Injectable()
export class AccountEffects {

  accountSignInWithEmail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.SIGN_IN_WITH_EMAIL),
      mergeMap((accountData: AccountActions.SignInWithEmail) => {
        // perform async
        console.log(accountData);
        return of(accountData).pipe(
          map(resData => {
            return new AccountActions.AddEmail(resData.payload.email);
          }),
          catchError(error => {
            // handle error
            return of(new AccountActions.AddEmail(''));
          }))
      })
    )
  });

  constructor(private actions$: Actions) { }
}
