import Link from 'next/link'
import styles from './InstaHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { headerStateAtom } from '@/atoms'
import { useAtom } from 'jotai'


export default function InstaHeader({scrollingContainer}: {scrollingContainer: React.RefObject<HTMLDivElement> | null}) {
  const [activeHeader, setActiveHeader] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  // Track whether the phone screen header background is transparent or not
  const [headerState, setHeaderState] = useAtom(headerStateAtom)
  // Set the header background to transparent when the user clicks the close button (that's actually a link to the home page)
  function handleClick() {
    setHeaderState(false)
  }


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
        <Link href="/" className={styles.link} onClick={handleClick}>
          <FontAwesomeIcon icon={faTimes} />
        </Link>
    </div>
  )
}