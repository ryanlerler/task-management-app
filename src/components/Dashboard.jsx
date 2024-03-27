import { useState } from "react";
import TaskList from "./TaskList";

function Dashboard({ tasks, onEdit, onDelete }) {
  const now = new Date();

  const upcomingTasks = tasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    return dueDate > now && !task.completed;
  });

  const overdueTasks = tasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    return dueDate < now && !task.completed;
  });

  const completedTasks = tasks.filter((task) => task.completed);

  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const isMatchingSearchTerm =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const isMatchingPriority =
      priorityFilter === "All" || task.priority === priorityFilter;
    const isMatchingStatus =
      statusFilter === "All" ||
      (statusFilter === "Completed" && task.completed) ||
      (statusFilter === "Pending" && !task.completed);
    return isMatchingSearchTerm && isMatchingPriority && isMatchingStatus;
  });

  const isFilterActive =
    searchTerm || priorityFilter !== "All" || statusFilter !== "All";

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="All">All Priorities</option>
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div>
          <h2>Upcoming Tasks</h2>
          <TaskList
            tasks={
              isFilterActive
                ? filteredTasks.filter(
                    (task) => upcomingTasks.indexOf(task) !== -1
                  )
                : upcomingTasks
            }
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>

        <div>
          <h2>Overdue Tasks</h2>
          <TaskList
            tasks={
              isFilterActive
                ? filteredTasks.filter(
                    (task) => overdueTasks.indexOf(task) !== -1
                  )
                : overdueTasks
            }
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>

        <div>
          <h2>Completed Tasks</h2>
          <TaskList
            tasks={
              isFilterActive
                ? filteredTasks.filter(
                    (task) => completedTasks.indexOf(task) !== -1
                  )
                : completedTasks
            }
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
