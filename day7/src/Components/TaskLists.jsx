import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;            // do nothing if empty
    setTasks([...tasks, newTask.trim()]);         // add
    setNewTask("");                               // clear input
  };

  return (
    <div>
      <h1>My Task</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}   // note the capital C
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
