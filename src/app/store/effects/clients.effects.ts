import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'

import { IUser } from '../../client/models/IUser'
import { ClientService } from '../../client/services/client.service'
import {
  EClientsActions,
  GetClients,
  GetClientsFailed,
  GetClientsSuccess
} from '../actions/clients.action'

@Injectable()
export class ClientsEffects {
  @Effect()
  getClients$ = this._actions.pipe(
    ofType<GetClients>(EClientsActions.GetClients),
    switchMap(action => {
      return this._clientService.getClients(action.payload).pipe(
        map(payload => new GetClientsSuccess(payload)),
        catchError(error => of(new GetClientsFailed()))
      )
    })
  )

  constructor(
    private _actions: Actions,
    private _clientService: ClientService
  ) {}
}
