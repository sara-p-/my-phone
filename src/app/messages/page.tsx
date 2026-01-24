import styles from './page.module.css'
import AppHeader from '@/components/layout/AppHeader/AppHeader'

export default function Messages() {
  return (
    <div className={styles.container}>
      <AppHeader label='Messages' />
    </div>
  )
}
