import AppButton from '@/components/ui/AppButton/AppButton'
import styles from './AppGrid.module.css'

export default function AppGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <AppButton image='/app-icon.png' name='Calendar' />
        <AppButton image='/app-icon.png' name='Instagram' />
        <AppButton image='/app-icon.png' name='Notes' />
        <AppButton image='/app-icon.png' name='Photos' />
        <AppButton image='/app-icon.png' name='Weather' />
        <AppButton image='/app-icon.png' name='Clock' />
        <AppButton image='/app-icon.png' name='Calculator' />
        <AppButton image='/app-icon.png' name='Messages' />
      </div>
    </div>
  )
}
