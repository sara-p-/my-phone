export type AppStateType = {
  calendar: boolean
  instagram: boolean
  notes: boolean
  photos: boolean
  weather: boolean
  clock: boolean
  calculator: boolean
  messages: boolean
}

export type AppTypes = keyof AppStateType

