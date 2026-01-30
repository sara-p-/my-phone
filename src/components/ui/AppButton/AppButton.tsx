'use client'
import styles from './AppButton.module.css'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { activeAppCardAtom, appListAtom, headerStateAtom } from '@/atoms'
import { AppType } from '@/types/appTypes'
import Link from 'next/link'

export default function AppButton({ icon, label, name, path }: AppType) {
  const [appList, setAppList] = useAtom(appListAtom)
  const [activeAppCard, setActiveAppCard] = useAtom(activeAppCardAtom)
  // Track whether the header background is transparent or not
  const [headerState, setHeaderState] = useAtom(headerStateAtom)
  // Check to see if the clicked app is already in the appList
  const isAppInList = appList.some((app: AppType) => app.name === name)

  // Add the clicked app to the appList if it is not already in the list
  // Also set the activeAppCard to the clicked app so that it can show first in the AppPanel
  function handleClick({ icon, label, name, path }: AppType) {
    if (!isAppInList) {
      setAppList([{ icon, label, name, path }, ...appList])
    }
    setActiveAppCard(0)
    // Set the header background to not transparent
    // setHeaderState(true)
  }

  return (
    <Link
      href={path}
      className={styles.button}
      onClick={() => handleClick({ icon, label, name, path })}
    >
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
