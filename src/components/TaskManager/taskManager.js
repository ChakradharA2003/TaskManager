import { IoMoonOutline } from "react-icons/io5";
import TaskForm from '../TaskForm/taskForm';
import './taskManager.css';

const TaskManager = () => {
    return (
        <div className='task-manager'>
            <div className='header'>
            <h1 className='heading'>Task Manager</h1>
            <button type="button" className='dark-mode-toggle'>
                <IoMoonOutline className='dark-mode-icon' size={30} color="#000" />
            </button>
            </div>

            <TaskForm />
            
        </div>
        
    )

}

export default TaskManager;