import { Action } from '@ngrx/store'
import { IUser } from '../../models/IUser'

export enum EClientActions {
  GetClients = '[Clients] Get Clients',
  GetClientsSuccess = '[Clients] Get Clients Success',
  GetClientsFailed = '[Clients] Get Clients Failed',
  PrepareForNextCall = '[Clients] Prepare For Next Call',
  ClearClientsState = '[Clients] Clear Clients State'
}

export class GetClients implements Action {
  public readonly type = EClientActions.GetClients
  constructor(public payload: string) {}
}

export class GetClientsSuccess implements Action {
  public readonly type = EClientActions.GetClientsSuccess
  constructor(public payload: { users: IUser[]; lastPage: number }) {}
}

export class GetClientsFailed implements Action {
  public readonly type = EClientActions.GetClientsFailed
}

export class ClearClientsState implements Action {
  public readonly type = EClientActions.ClearClientsState
}

export class PrepareForNextCall implements Action {
  public readonly type = EClientActions.PrepareForNextCall
}

export type ClientsActions =
  | GetClients
  | GetClientsSuccess
  | GetClientsFailed
  | ClearClientsState
  | PrepareForNextCall
