export interface IGenderState {
  genders: string[],
  loaded: boolean,
  failed: boolean
}

export const initialGenderState = {
  genders: [],
  loaded: false,
  failed: false
}
