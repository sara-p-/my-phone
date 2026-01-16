'use client'
import { appPanelStateAtom } from '@/atoms'
import styles from './AppPanel.module.css'
import { useAtom } from 'jotai'
import AppCard from '../AppCard/AppCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function AppPanel() {
  const [appPanelState] = useAtom(appPanelStateAtom)

  return (
    <div className={`${styles.appPanel} ${appPanelState ? styles.active : ''}`}>
      <div className={styles.cards}>
        <AppCard icon={'/app-icon.png'} label={'Calendar'} name={'calendar'} path={'/calendar'} />
        <AppCard icon={'/app-icon.png'} label={'Notes'} name={'notes'} path={'/notes'} />
        <AppCard icon={'/app-icon.png'} label={'Photos'} name={'photos'} path={'/photos'} />
        <AppCard icon={'/app-icon.png'} label={'Weather'} name={'weather'} path={'/weather'} />
        <AppCard icon={'/app-icon.png'} label={'Clock'} name={'clock'} path={'/clock'} />
        <AppCard icon={'/app-icon.png'} label={'Calculator'} name={'calculator'} path={'/calculator'} />
        <AppCard icon={'/app-icon.png'} label={'Messages'} name={'messages'} path={'/messages'} />
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={styles.button}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  )
}