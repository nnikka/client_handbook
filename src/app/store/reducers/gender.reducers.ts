import {
  EGenderActions,
  GenderActions
} from '../actions/gender.action'
import {
  IGenderState,
  initialGenderState
} from '../state/gender.state'

export const genderReducer = (
  state = initialGenderState,
  action: GenderActions
): IGenderState => {
  switch (action.type) {
    case EGenderActions.GetGendersSuccess: {
      return {
        ...state,
        genders: action.payload,
        loaded: true
      }
    }
    case EGenderActions.GetGendersFailed: {
      return {
        ...state,
        ...initialGenderState,
        failed: true
      }
    }
    case EGenderActions.ClearGenderState: {
      return {
        ...state,
        ...initialGenderState
      }
    }
    default:
      return state
  }
}
