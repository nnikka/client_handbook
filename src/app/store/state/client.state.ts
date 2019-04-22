import { IUser } from '../../models/IUser'
import { IDeposit } from '../../models/IDeposit'

export interface IClientState {
  client: IUser
  loaded: boolean
  failed: boolean
  deposits: IDeposit[]
  depositsLoaded: boolean
  depositsFailed: boolean
}

export const initialClientState = {
  client: null,
  loaded: false,
  failed: false,
  deposits: [],
  depositsLoaded: false,
  depositsFailed: false
}
