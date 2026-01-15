import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'
import {
  faBatteryThreeQuarters,
  faMoon,
  faWifi,
} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.column}>
          <span className={styles.time}>12:37</span>
        </div>
        <div className={styles.column}>
          <div className={styles.barContainer}>
            <div className={styles.barLens}></div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.icons}>
            {/* <FontAwesomeIcon icon={faBatteryThreeQuarters} />
            <FontAwesomeIcon icon={faWifi} /> */}
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </div>
      </div>
    </header>
  )
}
