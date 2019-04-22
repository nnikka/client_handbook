import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'

import { CurrencyService } from '../../shared/services/currency.service'
import {
  ECurrencyActions,
  GetCurrencies,
  GetCurrenciesSuccess,
  GetCurrenciesFailed
} from '../actions/currency.action'

@Injectable()
export class CurrencyEffects {
  @Effect()
  getCurrencies$ = this._actions.pipe(
    ofType<GetCurrencies>(ECurrencyActions.GetCurrencies),
    switchMap(() => {
      return this._currencyService.getCurrencies().pipe(
        map((currencies: string[]) => new GetCurrenciesSuccess(currencies)),
        catchError(error => of(new GetCurrenciesFailed()))
      )
    })
  )

  constructor(
    private _actions: Actions,
    private _currencyService: CurrencyService
  ) {}
}
