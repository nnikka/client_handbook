import { Action } from '@ngrx/store'

export enum EDepositTypeActions {
  GetDepositTypes = '[DepositType] Get DepositTypes',
  GetDepositTypesSuccess = '[DepositType] Get DepositTypes Success'
}

export class GetDepositTypes implements Action {
  public readonly type = EDepositTypeActions.GetDepositTypes
}

export class GetDepositTypesSuccess implements Action {
  public readonly type = EDepositTypeActions.GetDepositTypesSuccess
  constructor(public payload: string[]) {}
}

export type DepositTypeActions = GetDepositTypes | GetDepositTypesSuccess
