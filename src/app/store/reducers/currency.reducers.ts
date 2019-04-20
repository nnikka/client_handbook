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
        currecies: action.payload,
        loaded: true
      }
    }
    default:
      return state
  }
}
