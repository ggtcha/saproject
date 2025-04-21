import React, { createContext, useState } from 'react';

// สร้าง context สำหรับ Task
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

   
    const addTask = (newTask) => {
       
        const taskWithId = { ...newTask, id: Date.now() }; 
        setTasks((prevTasks) => [...prevTasks, taskWithId]);
    };

    
    const updateTaskStatus = (taskId, newStatus) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
