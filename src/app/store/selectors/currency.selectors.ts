import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICurrencyState } from '../state/currency.state';

const selectCurrency = (state: IAppState) => state.currency;

export const selectCurrencies = createSelector(
  selectCurrency,
  (state: ICurrencyState) => state.currencies
)

export const selectCurrencyLoadStatus = createSelector(
  selectCurrency,
  (state: ICurrencyState) => state.loaded
)

export const selectCurrencyStatuses = createSelector(
  selectCurrency,
  (state: ICurrencyState) => {
    return { failed: state.failed, loaded: state.loaded }
  }
)
