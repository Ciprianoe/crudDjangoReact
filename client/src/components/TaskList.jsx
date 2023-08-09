import { useEffect, useState } from "react"
import { getAllTask } from "../api/task.api"
import { TaskCard } from "./taskCard";

export function TasksList() {

const [tasks, setTasks] = useState([])

/* Aca vamos hacer el get al backend */
useEffect(()=>{
   

   async function loadTask(){
        const res = await getAllTask();
        setTasks(res.data)
    }
    loadTask();

}, []);

    return(
        <div className="grid grid-cols-3 gap-3">
            {tasks.map(task=>(
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
    
}