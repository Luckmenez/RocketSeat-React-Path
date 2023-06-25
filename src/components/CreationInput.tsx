import styles from './CreationInput.module.css'
import { PlusCircle } from '@phosphor-icons/react'

interface Props {
  submitTodo: (event:any) => void
  inputChange: (event:any) => void
  inputValue: string
}

export function CreationInput({ submitTodo,inputChange,inputValue }:Props){
  return(
    <form onSubmit={submitTodo} className={styles.container}>
      <input name='toDoCreation' value={inputValue} type="text" onChange={inputChange}/>
      <button type='submit'>
        Criar
        <PlusCircle color='#D9D9D9' size={16} className='icon'/>
      </button>
    </form>
  )
}