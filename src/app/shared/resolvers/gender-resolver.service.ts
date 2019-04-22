import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import { selectGendeStatuses } from '../../store/selectors/gender.selectors'
import { GetGenders, ClearGenderState } from '../../store/actions/gender.action'
import { tap, filter, take, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GenderResolver implements Resolve<boolean> {
  constructor(private store: Store<IAppState>) {}

  resolve(): Observable<boolean> {
    return this.store.pipe(
      select(selectGendeStatuses),
      tap((statuses: any) => {
        if (!statuses.loaded && !statuses.failed) {
          this.store.dispatch(new GetGenders())
        }
      }),
      filter(statuses => {
        if (statuses.loaded) return true
        else if (statuses.failed) {
          this.store.dispatch(new ClearGenderState())
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
