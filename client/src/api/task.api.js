import axios  from 'axios'

const tasksApi = axios.create({
   baseURL: 'http://localhost:8000/api/v1/tasks/'
})


/* export const getAllTask = () =>{
   // return axios.get('http://localhost:8000/api/v1/tasks/')
   return tasksApi.get('/');
} */

export const getAllTask = () =>  tasksApi.get('/');
export const getTask = (id) => tasksApi.get(`/${id}/`)
export const createTask = (task) => tasksApi.post('/',task);
export const deleteTask = (id) => tasksApi.delete(`/${id}/`);
export const updateTask = (id, task) => tasksApi.put(`/${id}/`,task);