import { atom } from 'jotai'
import { AppType } from './types/appTypes'


export const appPanelStateAtom = atom<boolean>(false)

export const appListAtom = atom<AppType[]>([])

export const activeAppCardAtom = atom<number>(0)