import {FilterValues, Task} from "../App";
import {Button} from "./Button";
import {useRef,ChangeEvent ,  useState} from "react"

type Props = {
    title: string
    date?: string
    tasks: Task[]
    deleteTask?: (taskID: number) => void
    changeFilter?: (filter: FilterValues) => void
    deleteAllTasks?: () => void
    createTask?: (title: string) => void
    //taskTitle?: string
    //setTaskTitle?: (((prevState: string) => string) | string)) => void

}

export const TodolistItem = ({
                                 title,
                                 date,
                                 tasks,
                                 deleteTask,
                                 changeFilter,
                                 deleteAllTasks,
                                 createTask, /*taskTitle,setTaskTitle*/
                             }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [taskTitle, setTaskTitle] = useState('')

    function createTaskHandler() {
        createTask(taskTitle)
        setTaskTitle("")
    }
    function changeTaskHandler(event: ChangeEvent<HTMLInputElement>){
        setTaskTitle(event.currentTarget.value)
    }

    return (
        <div>
            <div>{title}</div>
            <div>
                <input value={taskTitle}
                       onChange={(event) => {
                           setTaskTitle(changeTaskHandler)
                       }}
                       onKeyDown={event => {
                           if (event.key === 'Enter'){
                               createTaskHandler()
                           }
                       }}
                />

                <Button title={'+'} onClick={() => {
                    createTaskHandler()

                }
                }/>
            </div>
            {tasks.length === 0 ? (
                <div>Тасок нет</div>
            ) : (<ul>
                    {tasks.map(task => {
                        return (
                            <li key={crypto.randomUUID()}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button title={"-"} onClick={() => deleteTask(task.id)}/>
                            </li>
                        )
                    })}
                </ul>
            )}

            <div>
                <Button title={"All"} onClick={() => changeFilter('all')}/>
                <Button title={"Active"} onClick={() => changeFilter('active')}/>
                <Button title={"Completed"} onClick={() => changeFilter('completed')}/>
                <Button title={"Delete all"} onClick={() => deleteAllTasks()}/>
            </div>
            <div>{date}</div>
        </div>
    )
}