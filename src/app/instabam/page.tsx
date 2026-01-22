'use client'
import styles from './page.module.css'
import InstaPost from '@/components/InstaComponents/InstaPost/InstaPost'
import { useRef} from 'react'
import InstaHeader from '@/components/InstaComponents/InstaHeader/InstaHeader'

export default function InstaBam() {
  // Reference to the scrolling container that will be passed as a prop to the InstaHeader component
  // This is used in the InstaHeader scrolling animation
  const scrollingContainer = useRef<HTMLDivElement>(null)

  // Temporary Array of posts to display
  const posts = Array.from({ length: 10 }, (_, index) => index)
  
  return (
    <div className={styles.container}>
      <InstaHeader scrollingContainer={scrollingContainer as React.RefObject<HTMLDivElement>} />
      <div className={styles.allPostsContainer} ref={scrollingContainer}>
        {posts.map((post) => {
          return <InstaPost key={post} />
        })}
      </div>
    </div>
  )
}