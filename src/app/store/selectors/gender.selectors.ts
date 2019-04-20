import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IGenderState } from '../state/gender.state';

const selectGender = (state: IAppState) => state.gender;

export const selectGenders = createSelector(
  selectGender,
  (state: IGenderState) => state.genders
)

export const selectGenderLoadStatus = createSelector(
  selectGender,
  (state: IGenderState) => state.loaded
)
