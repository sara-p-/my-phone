import Link from 'next/link'
import styles from './InstaHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function InstaHeader({scrollingContainer}: {scrollingContainer: React.RefObject<HTMLDivElement> | null}) {
    const [activeHeader, setActiveHeader] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Handle the scroll event and set the active header state based on the scroll position
// This effect will show/hide the header based on what direction the user is scrolling
  useEffect(() => {
      function handleScroll() {
        const newScrollPosition = scrollingContainer?.current?.scrollTop || 0
        // If the new scroll position is greater than the previous scroll position, set the active header state to true
        if (newScrollPosition > scrollPosition) {
          setActiveHeader(true)
        } else {
          setActiveHeader(false)
        }
        setScrollPosition(newScrollPosition)
      }

    // Add the scroll event listener to the scrolling container
    if (scrollingContainer?.current) {
      scrollingContainer.current.addEventListener('scroll', handleScroll)
    }
    // Remove the scroll event listener when the component unmounts
    return () => {
      if (scrollingContainer?.current) {
        scrollingContainer.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [scrollPosition])
  

  return (
    <div className={`${styles.header} ${activeHeader ? styles.active : ''}`}>
        <h1>InstaBam</h1>
        <Link href="/" className={styles.link}>
          <FontAwesomeIcon icon={faTimes} />
        </Link>
    </div>
  )
}