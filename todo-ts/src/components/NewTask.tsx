import { PlusCircle } from 'phosphor-react'

import styles from './NewTask.module.css'
export function NewTask() {
    return (
        <>
          <form className={styles.form}>
            <div className={styles.formGroup}> 
              <input 
              className={styles.newTaskInput} 
              type='text' 
              placeholder='Adicione uma nova tarefa'
              />
              <button type="submit">
                Criar
                <PlusCircle size={20} />
              </button>
            </div>
          </form>
        </>
    )
}