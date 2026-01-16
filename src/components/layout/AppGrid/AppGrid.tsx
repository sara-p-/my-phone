import AppButton from '@/components/ui/AppButton/AppButton'
import styles from './AppGrid.module.css'

export default function AppGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <AppButton image='/app-icon.png' label='calendar' name='Calendar' />
        <AppButton image='/app-icon.png' label='instagram' name='Instagram' />
        <AppButton image='/app-icon.png' label='notes' name='Notes' />
        <AppButton image='/app-icon.png' label='photos' name='Photos' />
        <AppButton image='/app-icon.png' label='weather' name='Weather' />
        <AppButton image='/app-icon.png' label='clock' name='Clock' />
        <AppButton image='/app-icon.png' label='calculator' name='Calculator' />
        <AppButton image='/app-icon.png' label='messages' name='Messages' />
      </div>
    </div>
  )
}
