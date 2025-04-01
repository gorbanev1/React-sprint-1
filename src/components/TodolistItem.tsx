import {FilterValues, Task} from "../App";
import {Button} from "./Button";

type Props = {
    title: string
    date?: string
    tasks: Task[]
    deleteTask?: (taskID: number) => void
    changeFilter: (filter:FilterValues)=>void
}

export const TodolistItem = ({title, date, tasks, deleteTask, changeFilter}: Props) => {

    return (
        <div>
            <div>{title}</div>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length===0?(
                <div>Тасок нет</div>
                ):( <ul>
                    {tasks.map(task => {
                        return (
                            <li key={crypto.randomUUID()}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button title={"-"} onClick={()=>deleteTask(task.id)}/>
                            </li>
                        )
                    })}
                </ul>
            )}

            <div>
                <Button title={"All"} onClick={()=>changeFilter('all')}/>
                <Button title={"Active"} onClick={()=>changeFilter('active')}/>
                <Button title={"Completed"} onClick={()=>changeFilter('completed')}/>
            </div>
            <div>{date}</div>
        </div>
    )
}