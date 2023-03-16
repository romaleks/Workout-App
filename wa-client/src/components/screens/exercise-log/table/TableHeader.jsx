import styles from '../ExerciseLog.module.scss'

const TableHeader = () => {
  return (
    <div className={styles.row}>
      {['Previous', 'Weight & Repeat', 'Completed'].map(title => (
        <div key={title}>
          <span>{title}</span>
        </div>
      ))}
    </div>
  )
}

export default TableHeader
