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

export const selectClientDeposits = createSelector(
  selectClientState,
  (state: IClientState) => state.deposits
)

export const selectClientDepositsFailStatus = createSelector(
  selectClientState,
  (state: IClientState) => state.depositsFailed
)

export const selectClientDepositsLoadStatus = createSelector(
  selectClientState,
  (state: IClientState) => state.depositsLoaded
)
