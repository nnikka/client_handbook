export interface IDepositTypeState {
  depositTypes: string[],
  loaded: boolean,
  failed: boolean
}

export const initialDepositTypeState = {
  depositTypes: [],
  loaded: false,
  failed: false
}
