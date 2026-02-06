import { atom } from 'jotai'
import { AppType } from './types/appTypes'
import { MessageNotificationStatueType } from './types/messageTypes'
import messageData from '../public/data/messageData.json'
import { atomWithStorage } from 'jotai/utils'

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
// Track the state of the notification for the active message panel
export const messageNotificationStateAtom = atomWithStorage<
  MessageNotificationStatueType[]
>(
  'messageNotificationState',
  messageData.messages.map((message) => ({
    id: message.id,
    notification: true,
  }))
)
// Update the state of the notification for the active message panel
export const updateMessageNotificationStateAtom = atom(
  (get) => get(messageNotificationStateAtom),
  (get, set, id: number, notification: boolean) => {
    const messageState = get(messageNotificationStateAtom)
    const newMessageState = messageState.map((message) => {
      if (message.id === id) {
        return { ...message, notification: notification }
      }
      return message
    })
    set(messageNotificationStateAtom, newMessageState)
  }
)
