import { MessageThreadType } from '@/types/messageTypes'
import styles from './SingleMessage.module.css'
import Image from 'next/image'

type SingleMessageProps = {
  message: MessageThreadType
  sameUser: boolean
  lastUser: boolean
}

export default function SingleMessage({
  message,
  sameUser,
  lastUser,
}: SingleMessageProps) {
  return (
    <div
      className={`${styles.messageItem} ${message.self ? styles.self : ''} ${
        sameUser ? styles.sameUser : styles.differentUser
      } ${lastUser ? styles.lastUser : ''}`}
    >
      <div className={styles.messageItemContent}>
        <Image
          src={message.profileImage}
          alt='Profile Image'
          width={23}
          height={23}
          className={styles.profileImage}
        />
        <div className={styles.messageContainer}>
          <p className={styles.username}>{message.username}</p>
          <div className={styles.messageTextContainer}>
            <p className={styles.messageText}>{message.message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
