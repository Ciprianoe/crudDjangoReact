import { Link } from "react-router-dom"

export function Navigation(){
    return(
        <div>
          
            <Link to={'tasks'}>Task</Link>
            <Link to={'tasksForm'}>Create Task</Link>

           
        </div>       
    )
}


