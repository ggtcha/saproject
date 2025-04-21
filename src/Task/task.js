import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { TaskContext } from '../Context/TaskContext'; 
import './task.css';

const Task = () => {
    const { tasks } = useContext(TaskContext); 

    return (
        <div className="task-page">
            <h1 className='task text-center'>TASK</h1>
            <hr />
            {tasks.length > 0 ? (
                <TaskList tasks={tasks} /> 
            ) : (
                <p className="no-tasks">No tasks available.</p>
            )}
        </div>
    );
};

const TaskList = ({ tasks }) => {
    return (
        <div className="table-responsive">
            <table className="task-list">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Project Name</th>
                        <th>Status</th>
                        <th>Start Date</th>
                        <th>Deadline</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.project}</td>
                            <td className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>
                                {task.status}
                            </td>
                            <td>{task.startDate}</td> 
                            <td>{task.deadline}</td>
                            <td>
                                <Link to={`/task/${task.id}`} className="btn-view">
                                    <FaEye /> ดูรายละเอียด
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Task;
