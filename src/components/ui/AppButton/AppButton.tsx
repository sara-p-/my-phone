'use client'
import styles from './AppButton.module.css'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { appStateAtom } from '@/atoms'
import { AppType } from '@/types/appTypes'
import Link from 'next/link'


export default function AppButton({ icon, label, name, path }: AppType) {
  const [appState, setAppState] = useAtom(appStateAtom)

  function handleClick() {
    setAppState((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))

    console.log(appState)
  }


  return (
    <Link href={path} className={styles.button} onClick={handleClick}>
      <Image
        className={styles.image}
        src={icon}
        alt={`${label} icon` || 'App Icon'}
        width={65}
        height={65}
      />
      {label && <span className={styles.label}>{label}</span>}
    </Link>
  )
}
