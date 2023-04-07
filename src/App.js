import React from "react";
import "./index.css";
import { useState } from "react";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTask = (task) => {
    const updatedTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999),
        task,
      },
    ];
    setTasks(updatedTasks);
  }

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="relative bg-gradient-to-b from-pink-300 to-white ">
      <CreateTask onCreate={handleTask} />
      <TaskList onDelete={handleDelete} tasks={tasks}/>
    </div>
  );
}

export default App;
