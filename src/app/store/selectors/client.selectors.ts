import { createSelector } from '@ngrx/store'

import { IAppState } from '../state/app.state'
import { IClientState } from '../state/client.state'

const selectClientState = (state: IAppState) => state.client

export const selectClient = createSelector(
  selectClientState,
  (state: IClientState) => state.client
)

export const selectClientFailStatus = createSelector(
  selectClientState,
  (state: IClientState) => state.failed
)

export const selectClientLoadStatus = createSelector(
  selectClientState,
  (state: IClientState) => state.loaded
)
