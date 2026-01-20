import styles from './InstaPost.module.css'
import Image from 'next/image'

export default function InstaPost() {
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImage}>
            <Image src="/profile-image.png" alt="Profile" width={35} height={35} />
          </div>
          <div className={styles.profileName}>Profile Name</div>
        </div>
        <div className={styles.postImageContainer}>
          <div className={styles.postImage}></div>
          <div className={styles.postCaption}></div>
        </div>
      </div>
      <div className={styles.postFooter}>
        <div className={styles.postLikes}></div>
        <div className={styles.postComments}></div>
        <div className={styles.postTimestamp}></div>
      </div>
    </div>
  )
}