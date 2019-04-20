import { IDepositTypeState, initialDepositTypeState } from './depositType.state'
import { ICurrencyState, initialCurrencyState } from './currency.state'
import { IGenderState, initialGenderState } from './gender.state'

export interface IAppState {
  currency: ICurrencyState
  depositType: IDepositTypeState
  gender: IGenderState
}

export const initialAppState = {
  currency: initialCurrencyState,
  depositType: initialDepositTypeState,
  gender: initialGenderState
}

export function getInitialState(): IAppState {
  return initialAppState
}
