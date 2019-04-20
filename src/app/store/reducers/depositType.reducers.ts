import { EDepositTypeActions, DepositTypeActions } from '../actions/depositType.action'
import { IDepositTypeState, initialDepositTypeState } from '../state/depositType.state'

export const depositTypeReducer = (
  state = initialDepositTypeState,
  action: DepositTypeActions
): IDepositTypeState => {
  switch (action.type) {
    case EDepositTypeActions.GetDepositTypesSuccess: {
      return {
        ...state,
        depositTypes: action.payload,
        loaded: true
      }
    }
    default:
      return state
  }
}
