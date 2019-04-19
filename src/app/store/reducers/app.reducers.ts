import {  ActionReducerMap } from '@ngrx/store'

import { IAppState } from '../state/app.state'
import { currencyReducer } from './currency.reducers'
import { depositTypeReducer } from './depositType.reducers'

export const appReducers: ActionReducerMap<IAppState, any> = {
  currency: currencyReducer,
  depositType: depositTypeReducer
}
