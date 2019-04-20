import { Action } from '@ngrx/store'

export enum EDepositTypeActions {
  GetDepositTypes = '[DepositType] Get DepositTypes',
  GetDepositTypesSuccess = '[DepositType] Get DepositTypes Success',
  GetDepositTypesFailed = '[DepositType] Get DepositTypes Failed'
}

export class GetDepositTypes implements Action {
  public readonly type = EDepositTypeActions.GetDepositTypes
}

export class GetDepositTypesSuccess implements Action {
  public readonly type = EDepositTypeActions.GetDepositTypesSuccess
  constructor(public payload: string[]) {}
}

export class GetDepositTypesFailed implements Action {
  public readonly type = EDepositTypeActions.GetDepositTypesFailed
}

export type DepositTypeActions = GetDepositTypes | GetDepositTypesSuccess | GetDepositTypesFailed
