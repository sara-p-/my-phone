import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import InstaPost from '@/components/features/InstaPost/InstaPost'

export default function InstaBam() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>InstaBam</h1>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.allPostsContainer}>
        <InstaPost />
      </div>
    </div>
  )
}