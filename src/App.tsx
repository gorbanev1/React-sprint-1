import './App.css'
import {TodolistItem} from "./components/TodolistItem";
import {useState} from "react";
import {v1} from 'uuid'

export type Task = {
    id: string
    title: string,
    isDone: boolean
}
export type FilterValues = 'all'|'active'|'completed'

export const App= () => {

    const [tasks, setTasks]=useState<Task[]>(  [
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
        { id: v1(), title: 'Redux', isDone: false },
        { id: v1(), title: 'Typescript', isDone: false },
        { id: v1(), title: 'RTK query', isDone: false },
    ]
    )
console.log(tasks)
    const [filter, setFilter] =useState<FilterValues>('all')

    const changeFilter = (filter: FilterValues)=>{
        setFilter(filter)
    }

    let filteredTasks= tasks
    if (filter==='active'){
        filteredTasks = tasks.filter(task=>task.isDone===false)
    }
    if (filter==='completed'){
        filteredTasks = tasks.filter(task=>task.isDone===true)
    }

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter((t)=> t.id!==taskId))
        console.log(tasks)
    }
    const deleteAllTasks = () => {
        setTasks([])
        console.log(tasks)
    }

    const createTask = (taskTitle)=>{
        const newTask = {id: v1(), title:taskTitle, isDone: false}
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }
  return (
      <div className="app">
        <TodolistItem title={"what to learn"}
                      tasks={filteredTasks}
                      date={"27.01.2027"}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
                      deleteAllTasks={deleteAllTasks}
                      createTask={createTask}
                    /*  taskTitle={taskTitle}
                      setTaskTitle={setTaskTitle}*/
        />

      </div>
  )
}


