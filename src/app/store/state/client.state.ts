import { IUser } from '../../models/IUser'

export interface IClientState {
  client: IUser,
  loaded: boolean,
  failed: boolean
}

export const initialClientState = {
  client: null,
  loaded: false,
  failed: false
}
