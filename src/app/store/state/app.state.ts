import { IDepositTypeState, initialDepositTypeState } from './depositType.state'
import { ICurrencyState, initialCurrencyState } from './currency.state'
import { IGenderState, initialGenderState } from './gender.state'
import { IClientsState, initialClientsState } from './clients.state'

export interface IAppState {
  currency: ICurrencyState
  depositType: IDepositTypeState
  gender: IGenderState
  clients: IClientsState
}

export const initialAppState = {
  currency: initialCurrencyState,
  depositType: initialDepositTypeState,
  gender: initialGenderState,
  clients: initialClientsState
}

export function getInitialState(): IAppState {
  return initialAppState
}
