import styles from './AppCard.module.css'
import { AppType } from '@/types/appTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function AppCard({ icon, label, name, path }: AppType) {
  return <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.appName}>
        <Image src={icon} alt={label} width={65} height={65} />
        <span className={styles.label}>{label}</span>
      </div>
      <FontAwesomeIcon icon={faClose} />
    </div>
    <div className={styles.card}>
      <span className={styles.label}>{label}</span>
    </div>
  </div>
}