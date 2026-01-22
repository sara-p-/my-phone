'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'
import {
  faClone,
  faHouse,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useAtom } from 'jotai'
import {  appPanelStateAtom, headerStateAtom } from '@/atoms'

export default function Header() {
  const [, setAppPanelState] = useAtom(appPanelStateAtom)
  // Track whether the header background is transparent or not
  const [headerState, setHeaderState] = useAtom(headerStateAtom)

  // Open the app panel when the app panel icon is clicked
function handleAppPanelIconClick() {
  setAppPanelState(true)
}

  // Close the app panel when the home link is clicked
  function handleClick() {
    setAppPanelState(false)
    // Set the header background to transparent
    setHeaderState(false)
  }

  return (
    <header className={`${styles.header} ${headerState ? styles.active : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.column}>
          <Link href='/' className={styles.homeLink} onClick={handleClick}>
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
            <button className={styles.iconButton} onClick={handleAppPanelIconClick}>
              <FontAwesomeIcon icon={faClone} />
            </button>
            <button className={styles.iconButton}>
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
