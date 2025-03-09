import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './taskForm.css';
import TaskHandler from '../TaskHandler/taskHandler';

const TaskForm = () => {
    const [tasks,setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
        },
        {
            id: 2,
            text: 'Meeting at School',
        },
        {
            id: 3,
            text: 'Food Shopping',
        }
    ]);
    const [inputText, setInputText] = useState('');

    const setInputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, {id: tasks.length + 1, text: inputText}]);
        setInputText('');  
    }

    const setTasksHandler = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <form onSubmit={handleSubmit} className='task-form'>
            <div>
            <input type='text' placeholder='Add a task' onChange={setInputTextHandler} />
            <button type='submit' className="add-btn">Add</button>
            </div>
            <div>
                <ul className='task-list'>
                    {tasks.map((task) => (
                            <TaskHandler key={uuid()} task={task} setTasksHandler={setTasksHandler}/>
                    ))}
                </ul>
            </div>
        </form>
    )
}

export default TaskForm;