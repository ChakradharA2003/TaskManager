import { MdDelete } from "react-icons/md";
import './taskHandler.css';

const TaskHandler = ({ task,setTasksHandler }) => {
    const deleteTaskHandler = () => {
        setTasksHandler(task.id);
    }
    return (
        <li className='task'>
            <span>{task.text}</span>
            <button type="button" onClick={deleteTaskHandler} className='delete-btn'><MdDelete size={15}/></button>
        </li>
    )
}

export default TaskHandler;