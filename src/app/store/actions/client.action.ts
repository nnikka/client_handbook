import { Action } from '@ngrx/store'
import { IUser } from '../../models/IUser'

export enum EClientActions {
  GetClient = '[Client] Get Client',
  GetClientSuccess = '[Client] Get Client Success',
  GetClientFailed = '[Client] Get Client Failed',
  ClearClientState = '[Client] Clear Client State'
}

export class GetClient implements Action {
  public readonly type = EClientActions.GetClient
  constructor(public payload: number) {}
}

export class GetClientSuccess implements Action {
  public readonly type = EClientActions.GetClientSuccess
  constructor(public payload: IUser) {}
}

export class GetClientFailed implements Action {
  public readonly type = EClientActions.GetClientFailed
}

export class ClearClientState implements Action {
  public readonly type = EClientActions.ClearClientState
}

export type ClientActions =
  | GetClient
  | GetClientSuccess
  | GetClientFailed
  | ClearClientState
