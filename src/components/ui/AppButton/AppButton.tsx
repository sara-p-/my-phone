'use client'
import styles from './AppButton.module.css'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { appStateAtom } from '@/atoms'
import { AppTypes } from '@/types/appTypes'

interface AppButtonProps {
  image: string
  label: AppTypes
  name?: string
}

export default function AppButton({ image, label, name }: AppButtonProps) {
  const [appState, setAppState] = useAtom(appStateAtom)

  function handleClick() {
    setAppState((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))

    console.log(appState)
  }


  return (
    <button className={styles.button} onClick={handleClick}>
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
