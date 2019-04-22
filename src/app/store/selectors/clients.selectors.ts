import { createSelector } from '@ngrx/store'

import { IAppState } from '../state/app.state'
import { IClientsState } from '../state/clients.state'

const selectClientsState = (state: IAppState) => state.clients

export const selectClients = createSelector(
  selectClientsState,
  (state: IClientsState) => state.clients
)

export const selectClientsFailStatus = createSelector(
  selectClientsState,
  (state: IClientsState) => state.failed
)

export const selectClientsLoadStatus = createSelector(
  selectClientsState,
  (state: IClientsState) => state.loaded
)

export const selectClientsLastPage = createSelector(
  selectClientsState,
  (state: IClientsState) => state.lastPage
)
