export interface ICurrencyState {
  currecies: string[],
  loaded: boolean,
  failed: boolean
}

export const initialCurrencyState = {
  currecies: [],
  loaded: false,
  failed: false
}
