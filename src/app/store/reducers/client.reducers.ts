import { EClientActions, ClientActions } from '../actions/client.action'
import { IClientState, initialClientState } from '../state/client.state'

export const clientReducer = (
  state = initialClientState,
  action: ClientActions
): IClientState => {
  switch (action.type) {
    case EClientActions.GetClientSuccess: {
      return {
        ...state,
        client: action.payload,
        loaded: true
      }
    }
    case EClientActions.GetClientFailed: {
      return {
        ...state,
        failed: true
      }
    }
    case EClientActions.GetClientDepositsSuccess: {
      return {
        ...state,
        deposits: action.payload,
        depositsLoaded: true
      }
    }
    case EClientActions.GetClientDepositsFailed: {
      return {
        ...state,
        depositsFailed: true
      }
    }
    case EClientActions.ClientAddDeposit: {
      return {
        ...state,
        deposits: [...state.deposits, action.payload]
      }
    }
    case EClientActions.EditClientDeposit: {
      return {
        ...state,
        deposits: state.deposits.map((deposit, i) =>
          deposit.id == action.payload.id
            ? { ...action.payload }
            : { ...deposit }
        )
      }
    }
    case EClientActions.ClearClientState: {
      return {
        ...initialClientState
      }
    }
    default:
      return state
  }
}
