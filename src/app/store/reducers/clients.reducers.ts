import { EClientActions, ClientsActions } from '../actions/clients.action'
import { IClientsState, initialClientsState } from '../state/clients.state'

export const clientsReducer = (
  state = initialClientsState,
  action: ClientsActions
): IClientsState => {
  switch (action.type) {
    case EClientActions.GetClientsSuccess: {
      return {
        ...state,
        clients: action.payload,
        loaded: true
      }
    }
    case EClientActions.GetClientsFailed: {
      return {
        ...state,
        ...initialClientsState,
        failed: true
      }
    }
    case EClientActions.ClearClientsState: {
      return {
        ...initialClientsState
      }
    }
    default:
      return state
  }
}
