import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'

import { GenderService } from '../../services/gender.service'
import {
  EGenderActions,
  GetGenders,
  GetGendersFailed,
  GetGendersSuccess
} from '../actions/gender.action'

@Injectable()
export class GenderEffects {
  @Effect()
  getCurrencies$ = this._actions.pipe(
    ofType<GetGenders>(EGenderActions.GetGenders),
    switchMap(() => {
      return this._genderService.getGenders().pipe(
        map((currencies: string[]) => new GetGendersSuccess(currencies)),
        catchError(error => of(new GetGendersFailed()))
      )
    })
  )

  constructor(
    private _actions: Actions,
    private _genderService: GenderService
  ) {}
}
