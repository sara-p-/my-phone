import AppButton from '@/components/ui/AppButton/AppButton'
import styles from './AppGrid.module.css'
import { APP_TYPES } from '@/lib/globals'
import { AppType } from '@/types/appTypes'

export default function AppGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {APP_TYPES.map((app: AppType, index: number) => (
          <AppButton key={index} icon={app.icon} label={app.label} name={app.name} />
        ))}
      </div>
    </div>
  )
}
