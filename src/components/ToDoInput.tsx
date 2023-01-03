import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { Tarefas } from './Tarefas';
import { EmptyBody } from './EmptyBody';
import { Counter } from './Counter';

import styles from './ToDoInput.module.css';


export function ToDoInput() {
    const [tarefas, setTarefas] = useState<string[]> ([])

    const [newTarefaText, setNewTarefaText] = useState('')


    function handleCreatNewtarefa(event: FormEvent) {
        event.preventDefault()

        const notEqual = tarefas.filter(tarefa => {
            return tarefa === newTarefaText
        })

        if (notEqual.length != 0) {
            window.alert('Essa tarefa já existe!')
        } else {

            setTarefas([...tarefas, newTarefaText]);
            setNewTarefaText('');

        };
  
    }

    function handleNewTarefaChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTarefaText(event.target.value);
    }

    function handleNewTarefaInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteTarefa(tarefaToDelete: string) {
        const tarefasWithoutDeletedOne = tarefas.filter(tarefa => {
            return tarefa != tarefaToDelete;
        })

        setTarefas(tarefasWithoutDeletedOne);
    }

    const isNewTarefaEmpty = newTarefaText.length === 0;

    return (
        <article className={styles.post}>

            <form onSubmit={handleCreatNewtarefa} className={styles.listForm}>
                <div className={styles.submitForm}>

                    <input
                        name="comment"
                        placeholder="Adicione uma nova tarefa"
                        value={newTarefaText}
                        type="text"
                        onChange={handleNewTarefaChange}
                        onInvalid={handleNewTarefaInvalid}
                        required
                    />

                    <footer>
                        <button type="submit" disabled={isNewTarefaEmpty}>
                            Criar
                            <PlusCircle size={18} weight="bold" />
                        </button>
                    </footer>
                </div>
            </form>

            <section>
                <Counter />
            </section>

            <div className={styles.tarefaList}>

                {
                    tarefas.length === 0 ? <EmptyBody /> : tarefas.map(comment => {
                        return <Tarefas key={self.crypto.randomUUID()} content={comment} onDeleteTarefa={deleteTarefa} />
                    })


                }


            </div>
        </article>
    )
}