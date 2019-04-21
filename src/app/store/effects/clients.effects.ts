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
  getCurrencies$ = this._actions.pipe(
    ofType<GetClients>(EClientActions.GetClients),
    switchMap(action => {
      return this._clientService.getClients(action.payload).pipe(
        map((clients: IUser[]) => new GetClientsSuccess(clients)),
        catchError(error => of(new GetClientsFailed()))
      )
    })
  )

  constructor(
    private _actions: Actions,
    private _clientService: ClientService
  ) {}
}
