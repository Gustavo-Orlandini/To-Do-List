import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { Comment } from './Comment';

import styles from './Post.module.css';


interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    content: Content[];
}

export function Post({content}: PostProps) {
    const [comments, setComments] = useState([
        'Post toooop heim!?'
    ])

    const [newCommentText, setNewCommentText] = useState('')


    function handleCreatNewComment(event: FormEvent) {
        event.preventDefault()


        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
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
         
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>

                    }
                })}

            </div>

            <form onSubmit={handleCreatNewComment} className={styles.commentForm}>
                
                <textarea
                    name="comment" 
                    placeholder='Adicione uma nova tarefa'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Criar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}