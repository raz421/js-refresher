import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/task";
import taskreducer from "./reducer/taskReducer";
function App() {
  const [tasks, dispatch] = useReducer(taskreducer, initialTasks);

  const generateId = (data) => {
    let Id = data.reduce((acc, curr) =>
      acc && acc.id > curr.id ? acc.id : curr.id
    );
    let nextId = Id + 1;
    return nextId;
  };
  const handleAdd = (text) => {
    dispatch({
      type: "added",
      id: generateId(tasks),
      text,
    });
  };
  const handleChange = (newTask) => {
    dispatch({
      type: "changed",
      newTask,
    });
  };
  const handleDelete = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };
  return (
    <>
      <h1>To Do App</h1>
      <AddTask onAdd={handleAdd} />
      <TaskList
        tasks={tasks}
        onTaskChange={handleChange}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
