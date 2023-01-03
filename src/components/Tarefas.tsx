import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tarefas.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Tarefas({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteTarefa() {

        onDeleteComment(content);
    }


    return (
        <div className={styles.list}>
            

            <div className={styles.listBox}>
                <div className={styles.listContent}>
                    <header>
                        
                        <button onClick={handleDeleteTarefa} title='Deletar comentário.'>
                            <Trash size={24}/>    
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

            </div>
        </div>    
    )
}