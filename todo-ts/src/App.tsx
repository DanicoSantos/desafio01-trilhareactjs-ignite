import { useState } from 'react'
import toDoLogo from './assets/todo-logo.svg'

import { NewTask } from './components/NewTask';

import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div>
      <header className={styles.header}>
        <img className={styles.logo} src={toDoLogo} alt='Todo App' />
      </header>
      <main className={styles.wrapper}>
        <NewTask/>
        <div className='task-board'></div>
      </main>
    </div>
  )
}

export default App
