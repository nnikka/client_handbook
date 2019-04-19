import { Action } from '@ngrx/store'

export enum ECurrencyActions {
  GetCurrencies = '[Currency] Get Currencies',
  GetCurrenciesSuccess = '[Currency] Get Currencies Success'
}

export class GetCurrencies implements Action {
  public readonly type = ECurrencyActions.GetCurrencies
}

export class GetCurrenciesSuccess implements Action {
  public readonly type = ECurrencyActions.GetCurrenciesSuccess
  constructor(public payload: string[]) {}
}

export type CurrencyActions = GetCurrencies | GetCurrenciesSuccess
