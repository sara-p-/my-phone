import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MessagePreview.module.css'
import Image from 'next/image'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function MessagePreview() {
  return (
    <button className={styles.container}>
      <div className={styles.left}>
        <div className={styles.notification}></div>
        <div className={styles.profileImage}>
          <Image
            src='/temp-images/profile-image.png'
            alt='Profile'
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.messageHeader}>
          <h2 className={styles.name}>Grrltalk</h2>
          <div className={styles.actions}>
            <div className={styles.timestamp}>12:37 PM</div>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className={styles.messageContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            laborum repellendus, nihil quidem similique iure suscipit, ad
            laudantium, enim debitis delectus mollitia. Debitis ipsa maiores ex?
            Quas eum eaque temporibus sapiente ipsa quibusdam earum quod fugiat
            perspiciatis rem maxime quidem, culpa totam quaerat minus explicabo
            dolore architecto nisi sit tenetur!
          </p>
        </div>
      </div>
    </button>
  )
}
