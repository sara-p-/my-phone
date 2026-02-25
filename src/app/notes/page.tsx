import styles from './page.module.css'
import AppHeader from '@/components/layout/AppHeader/AppHeader'

export default function Notes() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <AppHeader label='Notes' />
      </div>
    </main>
  )
}
