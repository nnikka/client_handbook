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
        clients: action.payload.users,
        lastPage: action.payload.lastPage,
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
    case EClientActions.PrepareForNextCall: {
      return {
        ...state,
        clients: initialClientsState.clients,
        failed: initialClientsState.failed,
        loaded: initialClientsState.loaded
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
