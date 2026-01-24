import MessagePreview from '@/components/MessageComponents/MessagePreview/MessagePreview'
import styles from './page.module.css'
import AppHeader from '@/components/layout/AppHeader/AppHeader'

export default function Messages() {
  return (
    <div className={styles.container}>
      <AppHeader label='Messages' />
      <div className={styles.messagePreviews}>
        <MessagePreview />
        <MessagePreview />
        <MessagePreview />
      </div>
    </div>
  )
}
