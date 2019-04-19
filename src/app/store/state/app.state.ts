import { IDepositTypeState, initialDepositTypeState } from './depositType.state'
import { ICurrencyState, initialCurrencyState } from './currency.state'

export interface IAppState {
  currency: ICurrencyState
  depositType: IDepositTypeState
}

export const initialAppState = {
  currency: initialCurrencyState,
  depositType: initialDepositTypeState
}

export function getInitialState(): IAppState {
  return initialAppState
}
