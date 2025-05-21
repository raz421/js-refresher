import Task from "./Task";
export default function TaskList({ tasks, onDelete, onTaskChange }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onTaskChange={onTaskChange}
        />
      ))}
    </ul>
  );
}
