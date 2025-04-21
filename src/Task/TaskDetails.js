// TaskDetail.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../Context/TaskContext'; 
import './taskDetails.css';

const TaskDetail = () => {
    const { id } = useParams(); 
    const { tasks } = useContext(TaskContext);

    const task = tasks.find(task => task.id === parseInt(id)); 

    if (!task) {
        return <p>Task not found!</p>;
    }

    return (
        <div className="task-detail">
            <h2>Task Details for: {task.project}</h2>
            <hr />
            <p><strong>Status:</strong> <span className={`status status-${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span></p>
            <p><strong>Start Date:</strong> {task.startDate}</p>
            <p><strong>Deadline:</strong> {task.deadline}</p>
            <p><strong>Description:</strong> {task.description || "No description available."}</p>
            <p><strong>Assigned To:</strong> {task.assignedTo || "Not assigned"}</p>
            <p><strong>Priority:</strong> {task.priority || "No priority set"}</p>
            <p><strong>Estimated Completion Time:</strong> {task.estimatedCompletionTime || "No estimate provided"}</p>
            <p><strong>Progress:</strong> {task.progress ? `${task.progress}%` : "No progress recorded"}</p>
        </div>
    );
};

export default TaskDetail;
