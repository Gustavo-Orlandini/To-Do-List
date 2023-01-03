import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tarefas.module.css';

interface CommentProps {
    content: string;
    onDeleteTarefa: (comment: string) => void;
}

export function Tarefas({ content, onDeleteTarefa: onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteTarefa() {

        onDeleteComment(content);
    }

    return (

        <div className={styles.task}>

            <button className={styles.checkContainer}>
                <div></div>
                
            </button>

            <p>{content}</p>

            <button onClick={handleDeleteTarefa} title='Deletar comentário.'>
                <Trash size={20} />
            </button>


        </div>


    )
}