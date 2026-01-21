import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './InstaPost.module.css'
import Image from 'next/image'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function InstaPost() {
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImage}>
            <Image src="/profile-image.png" alt="Profile" width={35} height={35} />
          </div>
          <div className={styles.username}>@username</div>
        </div>
        <div className={styles.postImageContainer}>
          <div className={styles.postImage}></div>
          <div className={styles.postCaption}></div>
        </div>
      </div>
      <div className={styles.postFooter}>
        <div className={styles.postLikes}>
          <FontAwesomeIcon icon={faHeart} />
          <span className={styles.postLikesCount}>100k</span>
        </div>
        <div className={styles.postCaption}>
          <p className={styles.postCaptionText}><span className={styles.postCaptionUsername}>@username</span> This is a caption</p>
        </div>
        <p className={styles.postTimestamp}>2 days ago</p>
      </div>
    </div>
  )
}