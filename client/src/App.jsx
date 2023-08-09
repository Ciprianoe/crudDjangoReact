import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import {TaskPage} from './pages/TaskPage'
import {TaskFormPage} from './pages/TaskFormPage'
import { Navigation } from './components/Navigation';
import {Toaster} from 'react-hot-toast';


function App() {
  
  return (
    
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to={'/tasks'} />} />
          <Route path='/tasks' element={<TaskPage />} />
          <Route path='/tasksForm' element={<TaskFormPage />} />
          <Route path='/tasks/:id' element={<TaskFormPage />} />
        </Routes>
        <Toaster
          position="bottom-right"
          reverseOrder={true}
        />
      </div>
    </BrowserRouter>
  );
}

export default App
