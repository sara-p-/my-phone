import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function InstaBam() {
  return (
    <div className={styles.container}>
      <h1>InstaBam</h1>
      <div className={styles.header}>
        <h2>Header</h2>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  )
}