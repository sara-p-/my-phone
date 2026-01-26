import MessagePreview from '@/components/MessageComponents/MessagePreview/MessagePreview'
import styles from './page.module.css'
import AppHeader from '@/components/layout/AppHeader/AppHeader'
import MessagePanel from '@/components/MessageComponents/MessagePanel/MessagePanel'
import messageData from '../../../public/data/messageData.json'
import { MessageType } from '@/types/messageTypes'

export default function Messages() {
  const messages: MessageType[] = messageData.messages

  return (
    <main className={styles.main}>
      {messages.map((message) => {
        return <MessagePanel key={message.id} message={message} />
      })}
      <div className={styles.container}>
        <AppHeader label='Messages' />
        <div className={styles.messagePreviews}>
          {messages.map((messagePreview, index) => {
            return (
              <MessagePreview
                key={messagePreview.id}
                message={messagePreview}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}
