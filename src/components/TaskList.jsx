function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={`${task.id}-${index}`}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>{task.completed ? "Completed" : "Incomplete"}</td>
            <td>
              <button onClick={() => onEdit(task.id)}>Edit</button>
            </td>
            <td>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
