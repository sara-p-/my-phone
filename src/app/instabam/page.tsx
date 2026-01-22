'use client'
import styles from './page.module.css'
import InstaPost from '@/components/InstaComponents/InstaPost/InstaPost'
import { useRef} from 'react'
import InstaHeader from '@/components/InstaComponents/InstaHeader/InstaHeader'
import instadata from '../../../public/data/instadata.json'
import { PostType } from '@/types/instaTypes'

export default function InstaBam() {
  // Reference to the scrolling container that will be passed as a prop to the InstaHeader component
  // This is used in the InstaHeader scrolling animation
  const scrollingContainer = useRef<HTMLDivElement>(null)

  // Temporary Array of posts to display
  const posts: PostType[] = instadata.posts
  
  return (
    <div className={styles.container}>
      <InstaHeader scrollingContainer={scrollingContainer as React.RefObject<HTMLDivElement>} />
      <div className={styles.allPostsContainer} ref={scrollingContainer}>
        {posts.map((post) => {
          return <InstaPost key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}