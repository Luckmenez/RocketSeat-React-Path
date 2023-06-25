import styles from './ToDoHeader.module.css';

interface ToDo {
  id: string,
  description: string,
  createdAt: Date,
  isFinished: boolean,
  finishedAt: Date | null,
}

interface ToDoList {
  toDos: ToDo[]
}

function renderFinishedToDos(toDoList: ToDo[]) {
  const finishedTodosCount = toDoList.reduce((acc,cur) => {
    return cur.isFinished ? acc + 1 : acc
  },0)

  return <p><span>{finishedTodosCount}</span> de <span>{toDoList.length}</span></p>
}

export function ToDoHeader({toDos}:ToDoList){
  return(
    <div className={styles.container}>
      <div className={styles.tasksContainer}>
        <p className={styles.createdTasks}>Tarefas criadas</p>
        <span>{toDos.length}</span>
      </div>
      <div className={styles.tasksContainer}>
        <p className={styles.finishedTasks}>Concluídas</p>
        <span>
          { 
            renderFinishedToDos(toDos)
          }
        </span>
      </div>
    </div>
  )
}