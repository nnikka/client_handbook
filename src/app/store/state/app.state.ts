import { IDepositTypeState, initialDepositTypeState } from './depositType.state'
import { ICurrencyState, initialCurrencyState } from './currency.state'
import { IGenderState, initialGenderState } from './gender.state'
import { IClientsState, initialClientsState } from './clients.state'
import { IClientState, initialClientState } from './client.state'

export interface IAppState {
  currency: ICurrencyState
  depositType: IDepositTypeState
  gender: IGenderState
  clients: IClientsState,
  client: IClientState
}

export const initialAppState = {
  currency: initialCurrencyState,
  depositType: initialDepositTypeState,
  gender: initialGenderState,
  clients: initialClientsState,
  client: initialClientState
}

export function getInitialState(): IAppState {
  return initialAppState
}
