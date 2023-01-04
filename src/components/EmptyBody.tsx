import styles from './EmptyBody.module.css'
import ClipBoard from '../assets/Clipboard.svg'

export function EmptyBody() {
    return (

        <div className={styles.content}>
            
            <img src={ClipBoard} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>

        </div>

    )
}