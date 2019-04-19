export interface ICurrencyState {
  currecies: string[],
  isFetching: boolean
}

export const initialCurrencyState = {
  currecies: [],
  isFetching: true
}
