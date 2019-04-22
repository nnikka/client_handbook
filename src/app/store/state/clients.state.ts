import { IUser } from '../../client/models/IUser'

export interface IClientsState {
  clients: IUser[],
  loaded: boolean,
  failed: boolean,
  lastPage: number
}

export const initialClientsState = {
  clients: [],
  loaded: false,
  failed: false,
  lastPage: 1
}
