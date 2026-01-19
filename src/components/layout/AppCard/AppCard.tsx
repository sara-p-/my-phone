import styles from './AppCard.module.css'
import { AppType } from '@/types/appTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { activeAppCardAtom, appListAtom } from '@/atoms'


type AppCardProps = AppType & {
  position: 'center' | 'right' | 'left' | 'hidden' | 'extra-right' | 'extra-left'

}

export default function AppCard({ icon, label, name, path, position }: AppCardProps) {
const [appList, setAppList] = useAtom(appListAtom)
const index = appList.findIndex((app: AppType) => app.name === name)
const [activeAppCard, setActiveAppCard] = useAtom(activeAppCardAtom)

// Remove the app from the app list when the close button is clicked
function handleClose() {
  setAppList(appList.filter((app: AppType) => app.name !== name))
  setActiveAppCard(activeAppCard - 1 >= 0 ? activeAppCard - 1 : 0)
}



  return (
    <div className={`${styles.container} ${styles[position]}`} >
    <div className={`${styles.header} ${index === activeAppCard ? styles.active : ''}`}>
      <div className={styles.appName}>
        <Image src={icon} alt={label} width={30} height={30} />
        <span className={styles.label}>{label}</span>
      </div>
      <button className={styles.closeButton} onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
    <Link href={path} className={styles.card}>
      <span className={styles.label}>{label}</span>
    </Link>
  </div>
  )
}