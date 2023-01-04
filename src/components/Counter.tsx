import styles from './Counter.module.css'

interface CounterProps {
    tasksLength: number; 
    completedTasks: number;
}



export function Counter({tasksLength, completedTasks}: CounterProps) {
    return (
        <header>
            <div className={styles.leftCount}>
                <p>Tarefas criadas</p>
                <span>{tasksLength}</span>
            </div>

            <div className={styles.rightCount}>
                <p>Concluídas</p>
                <span>{completedTasks} de {tasksLength}</span>
                
            </div>
        </header>
    )
}