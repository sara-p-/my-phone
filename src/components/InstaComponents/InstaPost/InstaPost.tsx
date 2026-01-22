import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './InstaPost.module.css'
import Image from 'next/image'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { PostType } from '@/types/instaTypes'


type InstaPostProps = {
  post: PostType
}

export default function InstaPost({ post }: InstaPostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImage}>
            <Image src={post.profileImage} alt="Profile" width={35} height={35} />
          </div>
          <div className={styles.username}>@{post.username}</div>
        </div>
          <div className={styles.postImage}>
            <Image src={post.postImage} alt="Post" fill={true} sizes="100vw" objectFit="cover" />
          </div>
      </div>
      <div className={styles.postFooter}>
        <div className={styles.postLikes}>
          <FontAwesomeIcon icon={faHeart} />
          <span className={styles.postLikesCount}>{post.likes}</span>
        </div>
        <div className={styles.postCaption}>
          <p className={styles.postCaptionText}><span className={styles.postCaptionUsername}>@{post.username}</span> {post.caption}</p>
        </div>
        <p className={styles.postTimestamp}>{post.timestamp}</p>
      </div>
    </div>
  )
}