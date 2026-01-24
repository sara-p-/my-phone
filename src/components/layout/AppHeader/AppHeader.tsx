'use client'
import Link from 'next/link'
import styles from './AppHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { headerStateAtom } from '@/atoms'
import { useAtom } from 'jotai'

export default function AppHeader({ label }: { label: string }) {
  const [headerState, setHeaderState] = useAtom(headerStateAtom)
  // Set the header background to transparent when the user clicks the close button (that's actually a link to the home page)
  function handleClick() {
    setHeaderState(false)
  }

  return (
    <div className={styles.header}>
      <h1>{label}</h1>
      <Link href='/' className={styles.link} onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} />
      </Link>
    </div>
  )
}
