import {useForm} from 'react-hook-form'
import { createTask, deleteTask, updateTask,getTask } from '../api/task.api'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {toast} from 'react-hot-toast';

export function TaskFormPage(){
    const {register, handleSubmit, formState:{errors},setValue }= useForm()
    const navigate = useNavigate();
    const params = useParams();
    console.log(params)
    
    const onSubmit = handleSubmit( async data =>{
       if(params.id){
       await updateTask(params.id,data);
       toast.success(' Task Successfully update!',{style:{background:'#101010',
        color:'#fff'}})
       }else{
        await  createTask(data);
        toast.success(' Task Successfully created!',{style:{background:'#101010',
        color:'#fff'}})
        
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
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title"  {...register("title", { required: true })} className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
                {errors.title && <span>This Field is Required</span> }
                <textarea rows="3" placeholder="Description"  {...register("description", { required: true })} className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'></textarea>
                {errors.description && <span>This Field is Required</span> }
                
                  <button 
                    className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
                  >Save</button>                
                      
            </form>

            {params.id && 
                <div className='flex justify-end'>

<button
            className='bg-red-500 p-3 rounded-lg w-48 mt-3'           
            onClick={()=>{
                const accepted = window.confirm('are you sure delete this task?');
                if(accepted){
                    deleteTask(params.id);
                    navigate('/tasks');
                    toast.success(' Task Successfully deleted!',{style:{background:'#101010',
        color:'#fff'}})
                }     
            }}>Delete</button>


                </div>

          }
        </div>
    )
}