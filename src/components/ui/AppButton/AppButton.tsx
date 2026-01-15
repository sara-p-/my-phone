import styles from './AppButton.module.css'
import Image from 'next/image'

interface AppButtonProps {
  image: string
  name?: string
}

export default function AppButton({ image, name }: AppButtonProps) {
  return (
    <button className={styles.button}>
      <Image
        className={styles.image}
        src={image}
        alt={`${name} icon` || 'App Icon'}
        width={65}
        height={65}
      />
      {name && <span className={styles.label}>{name}</span>}
    </button>
  )
}
