import style from './TaskBoard.module.css'

import clipboard from '../assets/clipboard.svg'

export function TaskBoard() {
    return (
        <div className={style.taskBoard}>
            <header>
                <div>Tarefas criadas <span>5</span></div>
                <div>Concluídas <span>0</span></div>
            </header>
            <main>
                <img src={clipboard} />
                <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </main>
        </div>
    )
}