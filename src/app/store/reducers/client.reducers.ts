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
        ...initialClientState,
        failed: true
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
