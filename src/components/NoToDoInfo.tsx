import styles from './NoToDoInfo.module.css'
import { Clipboard } from './clipboard'

export function NoToDoInfo(){
  return(
    <div className={styles.container}>
      <Clipboard/>
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>    
    </div>
  )
}