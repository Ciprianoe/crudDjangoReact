import {useForm} from 'react-hook-form'
import { createTask, deleteTask, updateTask,getTask } from '../api/task.api'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'

export function TaskFormPage(){
    const {register, handleSubmit, formState:{errors},setValue }= useForm()
    const navigate = useNavigate();
    const params = useParams();
    console.log(params)
    
    const onSubmit = handleSubmit( async data =>{
       if(params.id){
       await updateTask(params.id,data);
       }else{
        await  createTask(data);
        
       }
       navigate('/tasks');
    });

    useEffect(()=>{
        async function loadTask(){
            if(params.id){
              const {data:{title,description},} =  await getTask(params.id);
              setValue('title',title);
              setValue('description',description);
            }
        }
        loadTask();
    },[]);

 
    const styles = {
        marginTop: '20px',
        /* display: 'flex',
        alignItems: 'center', */
      };
    return(
        <div style={styles}>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title" style={{ display: 'block' }} {...register("title", { required: true })} />
                {errors.title && <span>This Field is Required</span> }
                <textarea rows="3" placeholder="Description" style={{ display: 'block' }} {...register("description", { required: true })}></textarea>
                {errors.description && <span>This Field is Required</span> }
                
                  <button style={{ display: 'inline' }}>Save</button>                
                      
            </form>
            {params.id && <button onClick={()=>{
                const accepted = window.confirm('are you sure delete this task?');
                if(accepted){
                    deleteTask(params.id);
                    navigate('/tasks');
                }     
            }}>Delete</button>}
        </div>
    )
}