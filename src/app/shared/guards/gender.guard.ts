import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { of } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import { selectGendeStatuses } from '../../store/selectors/gender.selectors'
import { GetGenders, ClearGenderState } from '../../store/actions/gender.action'
import { catchError, tap, filter, switchMap, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GenderGuard implements CanActivate {
  constructor(private store: Store<IAppState>, private router: Router) {}

  getFromStoreOrApi(): Observable<any> {
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
          this.router.navigateByUrl('error', { replaceUrl: true })
          this.store.dispatch(new ClearGenderState())
          return true
        }
        return false
      }),
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
