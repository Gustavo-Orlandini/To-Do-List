import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

interface Post {
  id: number;
  content: {
      type: 'paragraph' | 'link';
      content: string;
  }[];

}

const posts: Post[] = [
  {
      id: 1,

      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋',},
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content: 'jane.design/doctorcare'},
      ],
  },

];


export function App() {
return (
  <div>
      <Header />

      <div className={styles.wrapper}>
          
          
          <main>
              {posts.map(post => {
                  return (
                  <Post 
                      key={post.id}
                      content={post.content}
                  />)
              })}
          </main>
      </div>


        
  </div>
)
}



