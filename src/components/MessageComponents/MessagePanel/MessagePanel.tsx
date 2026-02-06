'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MessagePanel.module.css'
import { faChevronLeft, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { MessageType } from '@/types/messageTypes'
import SingleMessage from '../SingleMessage/SingleMessage'
import {
  activeMessagePanelAtom,
  updateMessageNotificationStateAtom,
} from '@/atoms'
import { useAtom } from 'jotai'

type MessagePanelProps = {
  message: MessageType
}

export default function MessagePanel({ message }: MessagePanelProps) {
  // Update the atom that tracks which message preview hasn't been read (and thus has an 'activeNotification' class)
  const [messageNotificationState, updateMessageNotificationState] = useAtom(
    updateMessageNotificationStateAtom
  )
  // Update the atom that tracks which message panel is currently active
  const [activeMessagePanel, setActiveMessagePanel] = useAtom(
    activeMessagePanelAtom
  )

  // Close the message panel and go back to the message preview page
  function handleBack() {
    setActiveMessagePanel(null)
  }

  // When the user clicks on the nofitication button, update the atom that tracks which message preview hasn't been read, based on the message.id of the messagePreview that has been clicked
  function handleNotificationClick() {
    updateMessageNotificationState(message.id, true)
  }

  return (
    <div
      className={`${styles.panel} ${
        activeMessagePanel === message.id ? styles.active : ''
      }`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.backButton} onClick={handleBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className={styles.profileContainer}>
            <Image
              src={message.messageImage}
              alt='Profile Image'
              width={40}
              height={40}
              className={styles.messageImage}
            />
            <div className={styles.name}>
              <h2 className={styles.nameText}>{message.messageName}</h2>
            </div>
          </div>
          <button
            className={styles.notificationButton}
            onClick={handleNotificationClick}
          >
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </div>
        <div className={styles.messageThread}>
          {message.messageThread.map((singleMessage, index) => {
            const previousMessage = message.messageThread[index - 1]
            const nextMessage = message.messageThread[index + 1]
            const sameUser =
              singleMessage.username === previousMessage?.username
            const lastUser = singleMessage.username !== nextMessage?.username
            return (
              <SingleMessage
                key={`${singleMessage.id}-${index}`}
                message={singleMessage}
                sameUser={sameUser}
                lastUser={lastUser}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
