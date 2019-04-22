import { Action } from '@ngrx/store'

export enum ECurrencyActions {
  GetCurrencies = '[Currency] Get Currencies',
  GetCurrenciesSuccess = '[Currency] Get Currencies Success',
  GetCurrenciesFailed = '[Currency] Get Currencies Failed',
  ClearCurrencyState = '[Currency] Clear Currency State'
}

export class GetCurrencies implements Action {
  public readonly type = ECurrencyActions.GetCurrencies
}

export class GetCurrenciesSuccess implements Action {
  public readonly type = ECurrencyActions.GetCurrenciesSuccess
  constructor(public payload: string[]) {}
}

export class GetCurrenciesFailed implements Action {
  public readonly type = ECurrencyActions.GetCurrenciesFailed
}

export class ClearCurrencyState implements Action {
  public readonly type = ECurrencyActions.ClearCurrencyState
}

export type CurrencyActions = GetCurrencies | GetCurrenciesSuccess | GetCurrenciesFailed | ClearCurrencyState
