'use client'
import { appPanelStateAtom } from '@/atoms'
import styles from './AppPanel.module.css'
import { useAtom } from 'jotai'

export default function AppPanel() {
  const [appPanelState, setAppPanelState] = useAtom(appPanelStateAtom)

  return <div className={`${styles.appPanel} ${appPanelState ? styles.active : ''}`}>AppPanel</div>
}