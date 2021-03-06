import {
  EDepositTypeActions,
  DepositTypeActions
} from '../actions/depositType.action'
import {
  IDepositTypeState,
  initialDepositTypeState
} from '../state/depositType.state'

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
    case EDepositTypeActions.GetDepositTypesFailed: {
      return {
        ...state,
        ...initialDepositTypeState,
        failed: true
      }
    }
    case EDepositTypeActions.ClearDepositTypeState: {
      return {
        ...state,
        ...initialDepositTypeState
      }
    }
    default:
      return state
  }
}
