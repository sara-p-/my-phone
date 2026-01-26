import { atom } from 'jotai'
import { AppType } from './types/appTypes'

// APP PANEL ATOMS
// Track the state (open or closed) of the app panel that shows all the open apps
export const appPanelStateAtom = atom<boolean>(false)
// Track the list of apps that are currently open
export const appListAtom = atom<AppType[]>([])
// Track the index of the active app card in the app list
export const activeAppCardAtom = atom<number>(0)

// HEADER ATOMS
// Track the state (transparent or not) of the header
export const headerStateAtom = atom<boolean>(false)

// MESSAGES ATOMS
// Track which message panel is current active
export const activeMessagePanelAtom = atom<number | null>(null)
