import React, { useContext, useState } from 'react';
import { TaskContext } from '../Context/TaskContext'; 
import { useNavigate } from 'react-router-dom';
import './TaskAdmin.css'; 

const TaskAdmin = () => {
    const { addTask, tasks, updateTaskStatus } = useContext(TaskContext);
    const [newTask, setNewTask] = useState({
        project: '',
        status: 'Pending',
        startDate: '',
        deadline: '',
        description: '',
        assignedTo: '',
        priority: 'Medium',
        estimatedCompletionTime: '',
        progress: 0,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({
            ...prevTask,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);  
        console.log("Task added:", newTask);
        navigate('/task');
    };

    const handleStatusChange = (taskId) => {
        const taskToUpdate = tasks.find(task => task.id === taskId);
        const newStatus = taskToUpdate.status === 'Completed' ? 'Pending' : 'Completed';
        updateTaskStatus(taskId, newStatus);
        console.log(`Status updated for task ID: ${taskId} to ${newStatus}`);
    };

    return (
        <div className="task-admin-container">
            <h1 className='text-center'>Task Admin</h1>
            <hr />
            <div className="task-table-container">
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Status</th>
                            <th>Start Date</th>
                            <th>Deadline</th>
                            <th>Description</th>
                            <th>Assigned To</th>
                            <th>Priority</th>
                            <th>Estimated Time</th>
                            <th>Progress</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.project}</td>
                                <td>{task.status}</td>
                                <td>{task.startDate}</td>
                                <td>{task.deadline}</td>
                                <td>{task.description}</td>
                                <td>{task.assignedTo}</td>
                                <td>{task.priority}</td>
                                <td>{task.estimatedCompletionTime}</td>
                                <td>{task.progress}</td>
                                <td>
                                    <button 
                                        className="action-button" 
                                        onClick={() => handleStatusChange(task.id)}
                                    >
                                        Change Status
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <form onSubmit={handleSubmit} className="task-form">
                <input 
                    type="text" 
                    name="project" 
                    placeholder="Project Name" 
                    value={newTask.project} 
                    onChange={handleChange} 
                    required 
                    className="form-input" 
                />
                <select 
                    name="status" 
                    value={newTask.status} 
                    onChange={handleChange} 
                    required 
                    className="form-select"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <input 
                    type="date" 
                    name="startDate" 
                    value={newTask.startDate} 
                    onChange={handleChange} 
                    required 
                    className="form-input" 
                />
                <input 
                    type="date" 
                    name="deadline" 
                    value={newTask.deadline} 
                    onChange={handleChange} 
                    required 
                    className="form-input" 
                />
                <textarea 
                    name="description" 
                    placeholder="Description" 
                    value={newTask.description} 
                    onChange={handleChange} 
                    className="form-input" 
                />
                <input 
                    type="text" 
                    name="assignedTo" 
                    placeholder="Assigned To" 
                    value={newTask.assignedTo} 
                    onChange={handleChange} 
                    className="form-input" 
                />
                <select 
                    name="priority" 
                    value={newTask.priority} 
                    onChange={handleChange} 
                    className="form-select"
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <input 
                    type="text" 
                    name="estimatedCompletionTime" 
                    placeholder="Estimated Completion Time" 
                    value={newTask.estimatedCompletionTime} 
                    onChange={handleChange} 
                    className="form-input" 
                />
                <input 
                    type="number" 
                    name="progress" 
                    placeholder="Progress (%)" 
                    value={newTask.progress} 
                    onChange={handleChange} 
                    className="form-input" 
                />
                <button type="submit" className="submit-button">Add Task</button>
            </form>
        </div>
    );
};

export default TaskAdmin;
