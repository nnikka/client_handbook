import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'

import { IUser } from '../../models/IUser'
import { ClientService } from '../../services/client.service'
import {
  EClientActions,
  GetClients,
  GetClientsFailed,
  GetClientsSuccess
} from '../actions/clients.action'

@Injectable()
export class ClientsEffects {
  @Effect()
  getClients$ = this._actions.pipe(
    ofType<GetClients>(EClientActions.GetClients),
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
