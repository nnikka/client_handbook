import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'

import { IUser } from '../../models/IUser'
import { ClientService } from '../../services/client.service'
import {
  EClientActions,
  GetClient,
  GetClientFailed,
  GetClientSuccess
} from '../actions/client.action'

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

  constructor(
    private _actions: Actions,
    private _clientService: ClientService
  ) {}
}
