import { NoToDoInfo } from './NoToDoInfo'
import { ToDoCard } from './ToDoCard'
import styles from './ToDoContent.module.css'

interface ToDo {
  id: string,
  description: string,
  createdAt: Date,
  isFinished: boolean,
  finishedAt: Date | null,
}

interface ToDoList {
  toDos: ToDo[]
  setDone: (id:string) => void
  handleDelete: (id:string) => void
}

export function ToDoContent({toDos, setDone, handleDelete}: ToDoList){
  return(
    <div className={styles.container}>
      {
        toDos.length === 0 ? <NoToDoInfo/> : 
        toDos.map((todo: ToDo) => {
          return (
            <ToDoCard
              key={todo.id}
              id={todo.id}
              handleDelete={handleDelete}
              setDone={setDone}
              description={todo.description}
              isFinished={todo.isFinished}
            />
          )
        })
      }
      
    </div>
  )
}