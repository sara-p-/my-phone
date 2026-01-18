'use client'
import styles from './AppButton.module.css'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { appListAtom, appStateAtom } from '@/atoms'
import { AppType } from '@/types/appTypes'
import Link from 'next/link'
import { useEffect } from 'react'


export default function AppButton({ icon, label, name, path }: AppType) {
  const [appList, setAppList] = useAtom(appListAtom)

  // Check to see if the clicked app is already in the appList
  const isAppInList = appList.some((app: AppType) => app.name === name)

  // Add the clicked app to the appList if it is not already in the list
  function handleClick({icon, label, name, path}: AppType) {
    if (!isAppInList) {
      setAppList([{icon, label, name, path}, ...appList])
    } 
  }


  return (
    <Link href={'#'} className={styles.button} onClick={() => handleClick({icon, label, name, path})}>
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
