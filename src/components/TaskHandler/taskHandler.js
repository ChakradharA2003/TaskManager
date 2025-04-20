import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import './taskHandler.css';

const TaskHandler = ({ task,setTasksHandler }) => {
    const [taskChecked, setTaskChecked] = useState(false);
    const deleteTaskHandler = () => {
        setTasksHandler(task.id);
    }
    const checkTaskHandler = () => {
        setTaskChecked(!taskChecked);
    }
    return (
        <li className='task'>
            <div className="checkbox-and-task">
            <input type="checkbox" className='checkbox' checked={taskChecked} onClick={checkTaskHandler}/>
            { taskChecked ? <span className="checked-task">{task.text}</span> : <span>{task.text}</span>}
            </div>
            <button type="button" onClick={deleteTaskHandler} className='delete-btn'><MdDelete size={15}/></button>
        </li>
    )
}

export default TaskHandler;