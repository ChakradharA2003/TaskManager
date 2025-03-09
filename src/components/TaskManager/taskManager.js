import { IoMoonOutline } from "react-icons/io5";
import TaskForm from '../TaskForm/taskForm';

const TaskManager = () => {
    return (
        <div className='task-manager'>
            <div className='header'>
            <h1 className='heading'>Task Manager</h1>
            <IoMoonOutline size={20} />
            <TaskForm />
            </div>
        </div>
        
    )

}

export default TaskManager;