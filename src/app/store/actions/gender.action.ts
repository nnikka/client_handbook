import { Action } from '@ngrx/store'

export enum EGenderActions {
  GetGenders = '[Gender] Get Genders',
  GetGendersSuccess = '[Gender] Get Genders Success',
  GetGendersFailed = '[Gender] Get Genders Failed',
  ClearGenderState = '[Gender] Clear Gender State'
}

export class GetGenders implements Action {
  public readonly type = EGenderActions.GetGenders
}

export class GetGendersSuccess implements Action {
  public readonly type = EGenderActions.GetGendersSuccess
  constructor(public payload: string[]) {}
}

export class GetGendersFailed implements Action {
  public readonly type = EGenderActions.GetGendersFailed
}

export class ClearGenderState implements Action {
  public readonly type = EGenderActions.ClearGenderState
}

export type GenderActions = GetGenders | GetGendersSuccess | GetGendersFailed | ClearGenderState
