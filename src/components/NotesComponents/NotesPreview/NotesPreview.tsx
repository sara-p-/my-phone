import styles from './NotesPreview.module.css'

type NotesPreviewProps = {
  title: string
  date: string
  time: string
  content: string
  folderName: string
}

export default function NotesPreview({
  title,
  date,
  time,
  content,
  folderName,
}: NotesPreviewProps) {
  // Get the preview content for the note by truncating the content to 30 characters
  const previewContent =
    content.length > 30 ? content.substring(0, 30) + '...' : content

  // If there's a title, use it. Otherwise use the regular content in place of the title.
  const titleContent = title ? title : previewContent.substring(0, 10) + '...'

  return (
    <button className={styles.button}>
      <div className={styles.header}>
        <h1 className={styles.title}>{titleContent}</h1>
        <p className={styles.content}>
          <span className={styles.date}>
            {date} {time}
          </span>
          {title && <span className={styles.content}>{previewContent}</span>}
        </p>
        <p className={styles.folderName}>{folderName}</p>
      </div>
    </button>
  )
}
