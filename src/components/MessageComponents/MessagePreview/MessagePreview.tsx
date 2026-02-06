'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MessagePreview.module.css'
import Image from 'next/image'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { MessageType } from '@/types/messageTypes'
import {
  activeMessagePanelAtom,
  updateMessageNotificationStateAtom,
} from '@/atoms'
import { useAtom } from 'jotai'

type MessagePreviewProps = {
  message: MessageType
}

export default function MessagePreview({ message }: MessagePreviewProps) {
  // Update the atom that tracks which message preview hasn't been read (and thus has an 'activeNotification' class)
  const [messageNotificationState, updateMessageNotificationState] = useAtom(
    updateMessageNotificationStateAtom
  )
  // Update the atom that tracks which message panel is currently active
  const [, setActiveMessagePanel] = useAtom(activeMessagePanelAtom)
  // Get the last message in the message thread, to be displayed in the message preview
  const lastMessage = message.messageThread[message.messageThread.length - 1]

  function handleClick() {
    // Set the active message panel based on which message preview was clicked
    setActiveMessagePanel(message.id)
    // Update the atom that tracks which message preview hasn't been read, based on the message.id of the messagePreview that has been clicked
    updateMessageNotificationState(message.id, false)
  }

  // Get the notification state for the message preview by reading the atom that tracks the message states
  // Use the message.id to find the corresponding message state in the atom
  const notificationState = messageNotificationState.find(
    (notification) => notification.id === message.id
  )?.notification

  return (
    <button className={styles.container} onClick={handleClick}>
      <div className={styles.left}>
        {/* Show the notification dot if the message preview hasn't been read */}
        <div
          className={`${styles.notification} ${
            notificationState ? styles.notificationActive : ''
          }`}
        ></div>
        <div className={styles.profileImage}>
          <Image
            src={message.messageImage}
            alt='Message Image'
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.messageHeader}>
          <h2 className={styles.name}>{message.messageName}</h2>
          <div className={styles.actions}>
            <div className={styles.timestamp}>{lastMessage.timestamp}</div>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className={styles.messageContent}>
          <p>{lastMessage.message}</p>
        </div>
      </div>
    </button>
  )
}
