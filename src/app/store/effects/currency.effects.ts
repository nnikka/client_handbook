import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CurrencyService } from '../../services/currency.service'
import { ECurrencyActions, GetCurrencies, GetCurrenciesSuccess } from '../actions/currency.action'

@Injectable()
export class CurrencyEffects {
  @Effect()
  getCurrencies$ = this._actions.pipe(
    ofType<GetCurrencies>(ECurrencyActions.GetCurrencies),
    switchMap(() => this._currencyService.getCurrencies()),
    switchMap((currencies: string[]) => {
      return of(new GetCurrenciesSuccess(currencies))
    })
  );

  constructor(private _actions: Actions, private _currencyService: CurrencyService) {}
}
