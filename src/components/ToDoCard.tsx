import styles from './ToDoCard.module.css'
import { Trash } from '@phosphor-icons/react'

interface Props {
  description: string,
  isFinished: boolean,
  id: string
  setDone: (id: string) => void
  handleDelete: (id:string) => void
}

export function ToDoCard({description, isFinished, setDone, id, handleDelete}:Props){
  return(
    <div className={styles.container}>
      <div onClick={() => setDone(id)} className={ isFinished ? styles.finishedToDo : styles.notFinishedToDo}></div>
      <div>
        <span>{description}</span>
      </div>
      <Trash onClick={() => handleDelete(id)} color='#D9D9D9' className={styles.icon}/>
    </div>
  )
}