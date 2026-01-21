'use client'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import InstaPost from '@/components/features/InstaPost/InstaPost'
import { useEffect, useRef, useState } from 'react'

export default function InstaBam() {
  const [activeHeader, setActiveHeader] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollingContainer = useRef<HTMLDivElement>(null)
  const posts = Array.from({ length: 10 }, (_, index) => index)





  useEffect(() => {
      function handleScroll() {
        const newScrollPosition = scrollingContainer.current?.scrollTop || 0
        if (newScrollPosition > scrollPosition) {
          setActiveHeader(true)
        } else {
          setActiveHeader(false)
        }
        setScrollPosition(newScrollPosition)
      }

    if (scrollingContainer.current) {
      scrollingContainer.current.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (scrollingContainer.current) {
        scrollingContainer.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [scrollPosition])


  

  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${activeHeader ? styles.active : ''}`}>
        <h1>InstaBam</h1>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.allPostsContainer} ref={scrollingContainer}>
        {posts.map((post) => {
          return <InstaPost key={post} />
        })}
      </div>
    </div>
  )
}