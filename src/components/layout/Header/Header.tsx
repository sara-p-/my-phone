import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'
import {
  faBatteryThreeQuarters,
  faHome,
  faHouse,
  faMoon,
  faWifi,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.column}>
          <Link href='/' className={styles.homeLink}>
            <span className='visually-hidden'>Go to home</span>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <span className={styles.time}>12:37</span>
        </div>
        <div className={styles.column}>
          <div className={styles.barContainer}>
            <div className={styles.barLens}></div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </div>
      </div>
    </header>
  )
}
