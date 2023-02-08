import { ChangeEvent, FormEvent, useState } from 'react'
import toDoLogo from './assets/todo-logo.svg'
import clipboard from './assets/clipboard.svg'

import styles from './App.module.css';
import './global.css';

import { Task, Task as TaskInterface } from './components/Task';
import { PlusCircle } from 'phosphor-react';


interface TaskInterface {
  id: string
  content: string
  status: 'pending' | 'finished'
}

function App() {

  const [tasks, setTasks] = useState<TaskInterface[]>([])
  const [finishedTasks, setFinishedTasks] = useState(0)
  const [newTaskContent, setNewTaskContent] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskContent(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask: TaskInterface = {
      id: String(new Date()),
      content: newTaskContent,
      status: 'pending',
    }

    setTasks([...tasks, newTask])
    setNewTaskContent('')
  }

  const isNewTaskEmpty = newTaskContent.length === 0

  function changeTaskStatus(taskId: string ) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        if (task.status === 'finished') {
          task.status = 'pending'

          setFinishedTasks(finishedTasks - 1)
        } else {
          task.status = 'finished'

          setFinishedTasks(finishedTasks + 1)
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }



  return (
    <div>
      <header className={styles.header}>
        <img className={styles.logo} src={toDoLogo} alt='Todo App' />
      </header>
      <main className={styles.wrapper}>
        <div className={styles.newTask}>
          <form onSubmit={handleCreateNewTask} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                className={styles.newTaskInput}
                type='text'
                placeholder='Adicione uma nova tarefa'
                value={newTaskContent}
                onChange={handleNewTaskChange}
              />
              <button type="submit" disabled={isNewTaskEmpty}>
                Criar
                <PlusCircle size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className={styles.taskBoard}>
          <header>
            <div>Tarefas criadas <span>{tasks.length}</span></div>
            <div>Concluídas <span>{finishedTasks}</span></div>
          </header>
          <main>
            <div className={tasks.length <= 0 ? styles.emptyBoard : styles.notEmptyBoard}>
              <img src={clipboard} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
            {tasks.map(task => {
              return (
                <Task 
                  id={task.id}
                  key={task.id} 
                  content={task.content} 
                  status={task.status}
                  onChangeTaskStatus={changeTaskStatus} 
                />
              )
            })}
          </main>
        </div>
      </main>
    </div>
  )
}

export default App
