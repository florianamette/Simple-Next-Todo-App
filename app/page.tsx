"use client";

import React, { useState } from "react";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Add a new task
  const addTask = (taskText: string): void => {
    const newTask: Task = { id: Date.now(), text: taskText, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Toggle task completion
  const toggleTask = (taskId: number): void => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        )
    );
  };

  // Delete a task
  const deleteTask = (taskId: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-96 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Simple To-Do App</h1>
          <TaskInput onAddTask={addTask} />
          <TaskList
              tasks={tasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
          />
        </div>
      </div>
  );
};

export default Home;