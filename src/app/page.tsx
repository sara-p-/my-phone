import AppGrid from '@/components/layout/AppGrid/AppGrid'
import styles from './page.module.css'
import Dock from '@/components/layout/Dock/Dock'
import AppPanel from '@/components/layout/AppPanel/AppPanel'

export default function Home() {
  return (
    <>
      <AppGrid />
      <AppPanel />
      <Dock />
    </>
  )
}
