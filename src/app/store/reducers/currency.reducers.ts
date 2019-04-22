import { ECurrencyActions, CurrencyActions } from '../actions/currency.action'
import { ICurrencyState, initialCurrencyState } from '../state/currency.state'

export const currencyReducer = (
  state = initialCurrencyState,
  action: CurrencyActions
): ICurrencyState => {
  switch (action.type) {
    case ECurrencyActions.GetCurrenciesSuccess: {
      return {
        ...state,
        currencies: action.payload,
        loaded: true
      }
    }
    case ECurrencyActions.GetCurrenciesFailed: {
      return {
        ...state,
        ...initialCurrencyState,
        failed: true
      }
    }
    case ECurrencyActions.ClearCurrencyState: {
      return {
        ...state,
        ...initialCurrencyState
      }
    }
    default:
      return state
  }
}
