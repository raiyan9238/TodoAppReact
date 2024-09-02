import { useState } from 'react'
import './Todo.css'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Todoitems } from '../Todoitems'
let count=0

export const Todo = () => {
    const [todos,setTodos] = useState([])
    const inputRef = useRef(null)
    const add = () => {
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
        inputRef.current.value= ""
    }

    useEffect(() => {
        console.log(todos)
    }, [todos])
  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type='text' plpaceholder='Add Your Task' className='todo-input' />
            <div onClick={() => {add}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
            {todos.map((item,index) => {
                return <Todoitems key={index} no={item.no} display={item.display} text={item.text} />
            })}
        </div>
    </div>
  )
}
