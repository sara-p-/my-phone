import styles from './NotesPreview.module.css'

type NotesPreviewProps = {
  title: string
  date: string
  time: string
  previewText: string
  folderName: string
}

export default function NotesPreview({
  title,
  date,
  time,
  previewText,
  folderName,
}: NotesPreviewProps) {
  return (
    <button className={styles.previewButton}>
      <div className={styles.previewHeader}>
        {title && <h1>{title}</h1>}

        <p>
          <span>Date or Time</span> <span>preview text</span>
        </p>
        <p>Folder Name</p>
      </div>
    </button>
  )
}
