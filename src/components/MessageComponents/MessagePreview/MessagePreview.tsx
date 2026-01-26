'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MessagePreview.module.css'
import Image from 'next/image'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { MessageType } from '@/types/messageTypes'
import { activeMessagePanelAtom } from '@/atoms'
import { useAtom } from 'jotai'

type MessagePreviewProps = {
  message: MessageType
  index: number
}

export default function MessagePreview({
  message,
  index,
}: MessagePreviewProps) {
  const [, setActiveMessagePanel] = useAtom(activeMessagePanelAtom)

  const lastMessage = message.messageThread[message.messageThread.length - 1]

  function handleClick() {
    setActiveMessagePanel(message.id)
  }

  return (
    <button className={styles.container} onClick={handleClick}>
      <div className={styles.left}>
        <div
          className={`${styles.notification} ${index === 0 ? styles.notificationActive : ''}`}
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
