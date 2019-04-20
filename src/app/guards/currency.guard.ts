import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs'
import { of } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../store/state/app.state'
import { selectCurrencyLoadStatus } from '../store/selectors/currency.selectors'
import { GetCurrencies } from '../store/actions/currency.action'
import { catchError, tap, filter, switchMap, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CurrencyGuard implements CanActivate {
  constructor(private store: Store<IAppState>) {}

  getFromStoreOrApi(): Observable<any> {
    return this.store.pipe(
      select(selectCurrencyLoadStatus),
      tap(loaded => {
        if (!loaded) this.store.dispatch(new GetCurrencies())
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
