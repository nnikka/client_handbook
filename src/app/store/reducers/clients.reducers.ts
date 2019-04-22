import { EClientsActions, ClientsActions } from '../actions/clients.action'
import { IClientsState, initialClientsState } from '../state/clients.state'

export const clientsReducer = (
  state = initialClientsState,
  action: ClientsActions
): IClientsState => {
  switch (action.type) {
    case EClientsActions.GetClientsSuccess: {
      return {
        ...state,
        clients: action.payload.users,
        lastPage: action.payload.lastPage,
        loaded: true
      }
    }
    case EClientsActions.GetClientsFailed: {
      return {
        ...state,
        ...initialClientsState,
        failed: true
      }
    }
    case EClientsActions.PrepareForNextCall: {
      return {
        ...state,
        clients: initialClientsState.clients,
        failed: initialClientsState.failed,
        loaded: initialClientsState.loaded
      }
    }
    case EClientsActions.ClearClientsState: {
      return {
        ...initialClientsState
      }
    }
    default:
      return state
  }
}
