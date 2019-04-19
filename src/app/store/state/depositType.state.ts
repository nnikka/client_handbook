export interface IDepositTypeState {
  depositTypes: string[],
  isFetching: boolean
}

export const initialDepositTypeState = {
  depositTypes: [],
  isFetching: true
}
