import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'

import { DepositTypeService } from '../../shared/services/deposit-type.service'
import {
  EDepositTypeActions,
  GetDepositTypes,
  GetDepositTypesSuccess,
  GetDepositTypesFailed
} from '../actions/depositType.action'

@Injectable()
export class DepositTypeEffects {
  @Effect()
  getDepositTypes$ = this._actions.pipe(
    ofType<GetDepositTypes>(EDepositTypeActions.GetDepositTypes),
    switchMap(() => {
      return this._depositTypeService.getDepositTypes().pipe(
        map(
          (depositTypes: string[]) => new GetDepositTypesSuccess(depositTypes)
        ),
        catchError(error => of(new GetDepositTypesFailed()))
      )
    })
  )

  constructor(
    private _actions: Actions,
    private _depositTypeService: DepositTypeService
  ) {}
}
