import React from 'react';
import moment from 'moment';
import "./task.css";
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';
function Task({ task, id }) {
    const { dispatch } = useContext(TaskContext);

    const handleRemove = (e) => {
        e.preventDefault();
        
        dispatch({
            type: "REMOVE_TASK",
            id
        })
    }

    const handleMarkDone = (e) => {
        dispatch({
            type: "MARK_DONE",
            id
        })
    }
    return (
        <div className='bg-white py-6 rounded-lg shadow-lg flex items-center justify-between px-6 mb-4 border border-gray-100'>
            <div className="mark-done">
                <input 
                    type="checkbox" 
                    className="w-5 h-5 accent-yellow-400 cursor-pointer" 
                    onChange={handleMarkDone} 
                    checked={task.completed} 
                />
            </div>
            <div className="task-info text-gray-700 text-sm w-10/12 px-4">
                <h4 className={`task-title text-lg font-medium capitalize ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {task.title}
                </h4>
                <p className="task-description text-gray-500 mt-1">{task.description}</p>
                <div className='italic text-gray-400 text-xs mt-2'>
                    {
                        task?.createdAt ? (
                            <p>{moment(task.createdAt).fromNow()}</p>
                        ) : (
                            <p>just now</p>
                        )
                    }
                </div>
            </div>
            <div className="remove-task">
                <DeleteIcon
                    style={{ fontSize: 24, cursor: "pointer" }}
                    onClick={handleRemove}
                    className="remove-task-btn text-gray-400 hover:text-yellow-400 transition-colors duration-200" 
                />
            </div>
        </div>
    );
}

export default Task;