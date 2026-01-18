import { atom } from 'jotai'
import { AppStateType, AppType } from './types/appTypes'

export const appStateAtom = atom<AppStateType>({
  calendar: false,
  instagram: false,
  notes: false,
  photos: false,
  weather: false,
  clock: false,
  calculator: false,
  messages: false,
})

export const appPanelStateAtom = atom<boolean>(false)

export const appListAtom = atom<AppType[]>([])