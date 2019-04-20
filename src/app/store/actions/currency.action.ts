import { Action } from '@ngrx/store'

export enum ECurrencyActions {
  GetCurrencies = '[Currency] Get Currencies',
  GetCurrenciesSuccess = '[Currency] Get Currencies Success',
  GetCurrenciesFailed = '[Currency] Get Currencies Failed'
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

export type CurrencyActions = GetCurrencies | GetCurrenciesSuccess | GetCurrenciesFailed
