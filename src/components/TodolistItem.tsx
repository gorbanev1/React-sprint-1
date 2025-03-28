import {Task} from "../App";
import {Button} from "./Button";

type Props = {
    title: string
    date?: string
    tasks: Task[]
    deleteTask?: (taskID: number) => void
}

export const TodolistItem = ({title, date, tasks, deleteTask}: Props) => {

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
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
            <div>{date}</div>
        </div>
    )
}