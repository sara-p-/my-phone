'use client'
import { activeAppCardAtom, appListAtom, appPanelStateAtom } from '@/atoms'
import styles from './AppPanel.module.css'
import { useAtom } from 'jotai'
import AppCard from '../AppCard/AppCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { AppType } from '@/types/appTypes'

export default function AppPanel() {
  const [appPanelState] = useAtom(appPanelStateAtom)
  const [appList] = useAtom(appListAtom)
  // Track the active card by it's index in the app list
  const [activeAppCard, setActiveAppCard] = useAtom(activeAppCardAtom)
  
  // Navigate to the previous app card
  function handlePrevious() {
    setActiveAppCard(activeAppCard - 1)
  }

  // Navigate to the next app card
  function handleNext() {
    setActiveAppCard(activeAppCard + 1)
  }

  // Determine the position of the app card in the app panel based on the active app card
  function getPosition(index: number) {
    if(activeAppCard === index) {
      return 'center'
    } else if(activeAppCard === index + 1) {
      return 'right'
    } else if(activeAppCard === index - 1) {
      return 'left'
    } else if(activeAppCard === index + 2) {
      return 'extra-right'
    } else if(activeAppCard === index - 2) {
      return 'extra-left'
    } else {
      return 'hidden'
    }
  }
  
  
  
  // If the app panel is not active, return null
  if(!appPanelState) return null

  return (
    <div className={`${styles.appPanel} ${appPanelState ? styles.active : ''}`}>
      <div className={styles.cards}>
        {/* Show the apps in the app list */}
        {appList.map((app: AppType, index: number) => (
          // Show the app card for each app in the app list
          <AppCard key={app.name} icon={app.icon} label={app.label} name={app.name} path={app.path} position={getPosition(index)} />
        ))}
      </div>
      {/* If there are more than 1 app in the app list, show the navigation buttons */}
      {appList.length > 1 && (
      <div className={styles.buttons}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handlePrevious}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={styles.button} onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      )}
    </div>
  )
}