import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
    setIsEditing(false);
  };

  const editTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setEditTaskId(null);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setIsEditing(false);
    setEditTaskId(null);
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setEditTaskId(id);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditTaskId(null);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Add Task</button>
      )}
      {isEditing && (
        <TaskForm
          initialValues={
            editTaskId ? tasks.find((task) => task.id === editTaskId) : {}
          }
          onSubmit={editTaskId ? (task) => editTask(editTaskId, task) : addTask}
          onCancel={cancelEdit}
        />
      )}
      <Dashboard tasks={tasks} onEdit={handleEdit} onDelete={deleteTask} />
    </div>
  );
}

export default App;
