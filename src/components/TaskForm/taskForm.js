import { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import './taskForm.css';
import TaskHandler from '../TaskHandler/taskHandler';

const TaskForm = () => {
    const [tasks,setTasks] = useState([
        {
            id: uuid(),
            text: 'Doctors Appointment',
        },
        {
            id: uuid(),
            text: 'Meeting at School',
        },
        {
            id: uuid(),
            text: 'Food Shopping',
        }
    ]);
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const [inputText, setInputText] = useState('');

    const setInputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputText('');
        setTasks([...tasks, {id: uuid(), text: inputText}]); 
        localStorage.setItem('tasks', JSON.stringify([...tasks, {id: uuid(), text: inputText}]));
         
    }

    const setTasksHandler = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        localStorage.setItem('tasks', JSON.stringify(tasks.filter(task => task.id !== id)));
    }

    return (
        <form onSubmit={handleSubmit} className='task-form'>
            <div className='input-container'>
            <input type='text' placeholder='Add a task' value={inputText} onChange={setInputTextHandler} />
            <button type='submit' className="add-btn">Add</button>
            </div>
            <div>
                <ul className='task-list'>
                    {tasks.map((task) => (
                            <TaskHandler key={task.id} task={task} setTasksHandler={setTasksHandler}/>
                    ))}
                </ul>
            </div>
        </form>
    )
}

export default TaskForm;