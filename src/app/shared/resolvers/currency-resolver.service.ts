import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import { selectCurrencyStatuses } from '../../store/selectors/currency.selectors'
import {
  GetCurrencies,
  ClearCurrencyState
} from '../../store/actions/currency.action'
import { tap, filter, take, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CurrencyResolver implements Resolve<boolean> {
  constructor(private store: Store<IAppState>) {}

  resolve(): Observable<boolean> {
    return this.store.pipe(
      select(selectCurrencyStatuses),
      tap((statuses: any) => {
        if (!statuses.loaded && !statuses.failed) {
          this.store.dispatch(new GetCurrencies())
        }
      }),
      filter(statuses => {
        if (statuses.loaded) return true
        else if (statuses.failed) {
          this.store.dispatch(new ClearCurrencyState())
          return true
        }
      }),
      map(statuses => {
        if (statuses.loaded) return true
        return false
      }),
      take(1)
    )
  }
}
