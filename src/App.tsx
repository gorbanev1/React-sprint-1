import './App.css'
import {TodolistItem} from "./components/TodolistItem";
import {useState} from "react";

export type Task = {
    id: number
    title: string,
    isDone: boolean
}

export const App= () => {
    const [tasks, setTasks]=useState<Task[]>(  [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
        { id: 5, title: 'Typescript', isDone: false },
        { id: 6, title: 'RTK query', isDone: false },
    ]
    )
    const tasks2 = [


    ]

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter((t)=> t.id!==taskId))
        console.log(tasks)
    }
  return (
      <div className="app">
        <TodolistItem title={"what to learn"} tasks={tasks} date={"27.01.2027"} deleteTask={deleteTask}/>
        <TodolistItem title={"songs"} tasks={tasks2}/>

      </div>
  )
}


