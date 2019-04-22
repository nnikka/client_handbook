export interface ICurrencyState {
  currencies: string[],
  loaded: boolean,
  failed: boolean
}

export const initialCurrencyState = {
  currencies: [],
  loaded: false,
  failed: false
}
