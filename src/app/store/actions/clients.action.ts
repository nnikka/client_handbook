import { Action } from '@ngrx/store'
import { IUser } from '../../models/IUser'

export enum EClientsActions {
  GetClients = '[Clients] Get Clients',
  GetClientsSuccess = '[Clients] Get Clients Success',
  GetClientsFailed = '[Clients] Get Clients Failed',
  PrepareForNextCall = '[Clients] Prepare For Next Call',
  ClearClientsState = '[Clients] Clear Clients State'
}

export class GetClients implements Action {
  public readonly type = EClientsActions.GetClients
  constructor(public payload: string) {}
}

export class GetClientsSuccess implements Action {
  public readonly type = EClientsActions.GetClientsSuccess
  constructor(public payload: { users: IUser[]; lastPage: number }) {}
}

export class GetClientsFailed implements Action {
  public readonly type = EClientsActions.GetClientsFailed
}

export class ClearClientsState implements Action {
  public readonly type = EClientsActions.ClearClientsState
}

export class PrepareForNextCall implements Action {
  public readonly type = EClientsActions.PrepareForNextCall
}

export type ClientsActions =
  | GetClients
  | GetClientsSuccess
  | GetClientsFailed
  | ClearClientsState
  | PrepareForNextCall
