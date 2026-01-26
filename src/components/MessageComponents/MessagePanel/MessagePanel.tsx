'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MessagePanel.module.css'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { MessageType } from '@/types/messageTypes'
import SingleMessage from '../SingleMessage/SingleMessage'
import { activeMessagePanelAtom } from '@/atoms'
import { useAtom } from 'jotai'

type MessagePanelProps = {
  message: MessageType
}

export default function MessagePanel({ message }: MessagePanelProps) {
  const [activeMessagePanel, setActiveMessagePanel] = useAtom(
    activeMessagePanelAtom,
  )

  function handleBack() {
    setActiveMessagePanel(null)
  }

  return (
    <div
      className={`${styles.panel} ${activeMessagePanel === message.id ? styles.active : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.actions}>
            <button className={styles.backButton} onClick={handleBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
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
        </div>
        <div className={styles.messageThread}>
          {message.messageThread.map((message) => {
            return <SingleMessage key={message.id} message={message} />
          })}
        </div>
      </div>
    </div>
  )
}
