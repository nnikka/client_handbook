import { IUser } from '../../models/IUser'

export interface IClientsState {
  clients: IUser[],
  loaded: boolean,
  failed: boolean
}

export const initialClientsState = {
  clients: [],
  loaded: false,
  failed: false
}
