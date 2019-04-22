import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import { selectDepositTypeStatuses } from '../../store/selectors/depositType.selectors'
import {
  GetDepositTypes,
  ClearDepositTypeState
} from '../../store/actions/depositType.action'
import { tap, filter, take, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DepositTypeResolver implements Resolve<boolean> {
  constructor(private store: Store<IAppState>) {}

  resolve(): Observable<boolean> {
    return this.store.pipe(
      select(selectDepositTypeStatuses),
      tap((statuses: any) => {
        if (!statuses.loaded && !statuses.failed) {
          this.store.dispatch(new GetDepositTypes())
        }
      }),
      filter(statuses => {
        if (statuses.loaded) return true
        else if (statuses.failed) {
          this.store.dispatch(new ClearDepositTypeState())
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
