export type MessageType = {
  id: number
  group: boolean
  messageName: string
  messageImage: string
  messageThread: MessageThreadType[]
}

export type MessageThreadType = {
  id: number
  self: boolean
  username: string
  profileImage: string
  message: string
  timestamp: string
}
