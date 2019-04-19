import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DepositTypeService } from '../../services/deposit-type.service'
import { EDepositTypeActions, GetDepositTypes, GetDepositTypesSuccess } from '../actions/depositType.action'

@Injectable()
export class DepositTypeEffects {
  @Effect()
  getDepositTypes$ = this._actions.pipe(
    ofType<GetDepositTypes>(EDepositTypeActions.GetDepositTypes),
    switchMap(() => this._depositTypeService.getDepositTypes()),
    switchMap((currencies: string[]) => {
      return of(new GetDepositTypesSuccess(currencies))
    })
  );

  constructor(private _actions: Actions, private _depositTypeService: DepositTypeService) {}
}
