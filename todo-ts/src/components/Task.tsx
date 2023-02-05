import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
    status: 'pending' | 'finished'
}

export function Task({ status }: TaskProps) {
    return (
        <div className={styles.task}>
            <p className={status === 'finished' ? styles.finishedTask : ''}>
                <span className={status === 'finished' ? styles.finished : ''}>
                    <Check className={status === 'finished' ? styles.checked : styles.unchecked}/>
                </span>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <span>
                <Trash />
            </span>
        </div>
    )
}