import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'

import { IUser } from '../../models/IUser'
import { ClientService } from '../../services/client.service'
import { DepositService } from '../../services/deposit.service'
import {
  EClientActions,
  GetClient,
  GetClientFailed,
  GetClientSuccess,
  GetClientDeposits,
  GetClientDepositsSuccess,
  GetClientDepositsFailed
} from '../actions/client.action'
import { IDeposit } from '../../models/IDeposit'

@Injectable()
export class ClientEffects {
  @Effect()
  getClients$ = this._actions.pipe(
    ofType<GetClient>(EClientActions.GetClient),
    switchMap(action => {
      return this._clientService.getClientById(action.payload).pipe(
        map((payload: IUser[]) => new GetClientSuccess(payload[0])),
        catchError(error => of(new GetClientFailed()))
      )
    })
  )

  @Effect()
  getClientDeposits$ = this._actions.pipe(
    ofType<GetClientDeposits>(EClientActions.GetClient),
    switchMap(action => {
      return this._depositService.getByUserId(action.payload).pipe(
        map((payload: IDeposit[]) => new GetClientDepositsSuccess(payload)),
        catchError(error => of(new GetClientDepositsFailed()))
      )
    })
  )

  constructor(
    private _actions: Actions,
    private _clientService: ClientService,
    private _depositService: DepositService
  ) {}
}
