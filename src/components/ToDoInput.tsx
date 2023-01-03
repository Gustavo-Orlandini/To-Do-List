import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { Comment } from './Comment';
import { EmptyBody } from './EmptyBody';

import styles from './ToDoInput.module.css';


interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export function ToDoInput() {
    const [comments, setComments] = useState([
        'Post toooop heim!?'
    ])

    const [newCommentText, setNewCommentText] = useState('')


    function handleCreatNewComment(event: FormEvent) {
        event.preventDefault()


        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>

            <form onSubmit={handleCreatNewComment} className={styles.commentForm}>
                <div className={styles.submitForm}>

                    <input
                        name="comment"
                        placeholder="Adicione uma nova tarefa"
                        value={newCommentText}
                        type="text"
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required
                    />

                    <footer>
                        <button type="submit" disabled={isNewCommentEmpty}>
                            Criar
                            <PlusCircle size={18} weight="bold" />
                        </button>
                    </footer>
                </div>
            </form>



            <div className={styles.commentList}>

                {
                    comments.length === 0 ? <EmptyBody /> : comments.map(comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    })

                    
                }

                
            </div>
        </article>
    )
}