import { Action } from '@ngrx/store'
import { IUser } from '../../client/models/IUser'
import { IDeposit } from '../../client/models/IDeposit'

export enum EClientActions {
  GetClient = '[Client] Get Client',
  GetClientSuccess = '[Client] Get Client Success',
  GetClientFailed = '[Client] Get Client Failed',
  ClearClientState = '[Client] Clear Client State',
  GetClientDeposits = '[Client] Get Client Deposits',
  GetClientDepositsSuccess = '[Client] Get Client Deposits Success',
  GetClientDepositsFailed = '[Client] Get Client Deposits Failed',
  ClientAddDeposit = '[Client] Get Client Add Deposit',
  EditClientDeposit = '[Client] Edit Client Deposit'
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

export class GetClientDeposits implements Action {
  public readonly type = EClientActions.GetClientDeposits
  constructor(public payload: number) {}
}

export class GetClientDepositsSuccess implements Action {
  public readonly type = EClientActions.GetClientDepositsSuccess
  constructor(public payload: IDeposit[]) {}
}

export class GetClientDepositsFailed implements Action {
  public readonly type = EClientActions.GetClientDepositsFailed
}

export class EditClientDeposit implements Action {
  public readonly type = EClientActions.EditClientDeposit
  public constructor(public payload: IDeposit) {}
}

export class ClientAddDeposit implements Action {
  public readonly type = EClientActions.ClientAddDeposit
  constructor(public payload: IDeposit) {}
}

export type ClientActions =
  | GetClient
  | GetClientSuccess
  | GetClientFailed
  | ClearClientState
  | GetClientDeposits
  | GetClientDepositsSuccess
  | GetClientDepositsFailed
  | ClientAddDeposit
  | EditClientDeposit
