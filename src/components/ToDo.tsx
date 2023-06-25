import styles from './ToDo.module.css';
import { ToDoHeader } from './ToDoHeader'
import { ToDoContent } from './TodoContent'

interface ToDo {
  id: string,
  description: string,
  createdAt: Date,
  isFinished: boolean,
  finishedAt: Date | null,
}

export interface ToDoList {
  toDos: ToDo[]
  setDone: (id:string) => void
  handleDelete: (id:string) => void
}

export function ToDo({toDos, setDone, handleDelete}: ToDoList){

  return(
    <div className={styles.container}>
      <ToDoHeader toDos={toDos}/>
      <ToDoContent handleDelete={handleDelete} setDone={setDone} toDos={toDos}/>
    </div>
  )
}