import { Action } from '@ngrx/store'
import { IUser } from '../../models/IUser'

export enum EClientActions {
  GetClients = '[Clients] Get Clients',
  GetClientsSuccess = '[Clients] Get Clients Success',
  GetClientsFailed = '[Clients] Get Clients Failed',
  ClearClientsState = '[Clients] Clear Clients State'
}

export class GetClients implements Action {
  public readonly type = EClientActions.GetClients
  constructor(public payload: string) {}
}

export class GetClientsSuccess implements Action {
  public readonly type = EClientActions.GetClientsSuccess
  constructor(public payload: IUser[]) {}
}

export class GetClientsFailed implements Action {
  public readonly type = EClientActions.GetClientsFailed
}

export class ClearClientsState implements Action {
  public readonly type = EClientActions.ClearClientsState
}

export type ClientsActions = GetClients | GetClientsSuccess | GetClientsFailed | ClearClientsState
