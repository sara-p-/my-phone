'use client'
import { appPanelStateAtom } from '@/atoms'
import styles from './Dock.module.css'
import { useAtom } from 'jotai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Dock() {

  const [appPanelState, setAppPanelState] = useAtom(appPanelStateAtom)

  function handleClick() {
    setAppPanelState(!appPanelState)
  }

  return (
  <div className={styles.dock}>
    <button onClick={handleClick} className={styles.button}>
    {appPanelState ? (
      <>
      <span className='visually-hidden'>Home</span>
      <FontAwesomeIcon icon={faHome} />
      </>
    ) : (
      <>
      <span className='visually-hidden'>Apps</span>
      <FontAwesomeIcon icon={faClone} />
      </>
      
    )}
  </button>
</div>
)
}