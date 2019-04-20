import { Action } from '@ngrx/store'

export enum EGenderActions {
  GetGenders = '[Gender] Get Genders',
  GetGendersSuccess = '[Gender] Get Genders Success',
  GetGendersFailed = '[Gender] Get Genders Failed'
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

export type GenderActions = GetGenders | GetGendersSuccess | GetGendersFailed
