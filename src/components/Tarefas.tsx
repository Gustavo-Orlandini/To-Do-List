import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tarefas.module.css';
import { BsFillCheckCircleFill, BsListTask } from 'react-icons/bs';

interface CommentProps {
    content: string;
    onDeleteTarefa: (comment: string) => void;
    onCompleted: (comment: string) => void;
    isCompleted: boolean
}

export function Tarefas({ content, onCompleted, isCompleted, onDeleteTarefa: onDeleteComment }: CommentProps) {
    

    function handleDeleteTarefa() {

        onDeleteComment(content);
    }

    return (

        <div className={styles.task}>

            <button className={styles.checkContainer}
            onClick={() => onCompleted(content)}
            >
                {isCompleted ? <BsFillCheckCircleFill style={{fontSize: '30px'}} /> : <div />}
    
            </button>

            <p className={isCompleted ? styles.textCompleted : ""}>{content}</p>


            <button onClick={handleDeleteTarefa} title='Deletar comentário.'>
                <Trash size={20} />
            </button>


        </div>


    )
}
