import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IDepositTypeState } from '../state/depositType.state';

const selectDepositType = (state: IAppState) => state.depositType;

export const selectDepositTypes = createSelector(
  selectDepositType,
  (state: IDepositTypeState) => state.depositTypes
)

export const selectDepositTypeLoadStatus = createSelector(
  selectDepositType,
  (state: IDepositTypeState) => state.loaded
)
