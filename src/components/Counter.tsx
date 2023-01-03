import styles from './Counter.module.css'

export function Counter() {
    return (
        <header>
            <div className={styles.leftCount}>
                <p>Tarefas criadas</p>
                <span>0</span>
            </div>

            <div className={styles.rightCount}>
                <p>Concluídas</p>
                <span>2 de 5</span>
            </div>
        </header>
    )
}