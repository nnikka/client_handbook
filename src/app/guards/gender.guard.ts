import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs'
import { of } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../store/state/app.state'
import { selectGenderLoadStatus } from '../store/selectors/gender.selectors'
import { GetGenders } from '../store/actions/gender.action'
import { catchError, tap, filter, switchMap, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GenderGuard implements CanActivate  {
  constructor(private store: Store<IAppState>) {}

  getFromStoreOrApi(): Observable<any> {
    return this.store.pipe(
      select(selectGenderLoadStatus),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new GetGenders())
        }
      }),
      filter(loaded => loaded),
      take(1)
    )
  }

  canActivate(): Observable<boolean> {
    return this.getFromStoreOrApi().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    )
  }
}
