import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
    id: string
    content: string
    status: 'pending' | 'finished'
    onChangeTaskStatus: (id: string) => void
    onDeleteTask: (id: string) => void
}

export function Task({ content, status, id, onChangeTaskStatus, onDeleteTask }: TaskProps) {
    function handleChangeTaskStatus() {
        onChangeTaskStatus(id)
    }

    function handleDeleteTask() {
        onDeleteTask(id)
    }
    return (
       
        <div className={styles.task}>
            <p className={status === 'finished' ? styles.finishedTask : ''}>
                <span onClick={handleChangeTaskStatus} className={status === 'finished' ? styles.finished : ''}>
                    <Check className={status === 'finished' ? styles.checked : styles.unchecked} />
                </span>
                {content}
                </p>
            <span>
                <Trash onClick={handleDeleteTask} />
            </span>
        </div>
    )
}