import { Header } from './components/Header';
import { ToDoInput } from './components/ToDoInput';

import styles from './App.module.css';
import './global.css';

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>

                <main>

                    <ToDoInput />

                </main>

            </div>

        </div>
    )
}



