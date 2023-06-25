import { useState, FormEvent, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Header } from './components/Header'
import { CreationInput } from './components/CreationInput'
import { ToDo } from './components/ToDo'
import './global.css'

export interface IToDo {
  id: string,
  description: string,
  createdAt: Date,
  isFinished: boolean,
  finishedAt: Date | null,
}

export function App() {
  const [toDoList, setToDoList] = useState<IToDo[]>([])  

  const [newTodoText, setNewTodoText] = useState('')

  function handleToDoCreation(event: FormEvent){
    event.preventDefault()

    const newTodo = {
      id: uuidv4(),
      description: newTodoText,
      createdAt: new Date(),
      isFinished: false,
      finishedAt: null
    }
    
    setToDoList([...toDoList,newTodo])
  }

  function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodoText(event.target.value)
  }

  function handleToDoDone(id:string){
    console.log(`asdfasdf `,id);
    const newToDoList = toDoList.map((todo) =>{
      if(todo.id === id){
        return { 
          ...todo, 
          isFinished: !todo.isFinished,
          finishedAt: new Date(),
        }
      } 
      return todo
    })
    setToDoList([...newToDoList])
  }

  function deleteToDo(id: string) {
    const newToDoList = toDoList.filter((todo) => todo.id !== id)
    setToDoList([...newToDoList])
  }
  return (
    <div>
      <Header/>
      <CreationInput inputValue={newTodoText} submitTodo={handleToDoCreation} inputChange={handleNewToDoChange}/>
      <main>
        <ToDo handleDelete={deleteToDo} setDone={handleToDoDone} toDos={toDoList}/>
      </main>
    </div>
  )
}