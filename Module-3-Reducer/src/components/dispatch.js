// Add
setTasks([
      ...tasks,
      {
        id: generateId(tasks),
        text: text,
        done: false,
      },
    ]);
----------------
// change
 setTasks(
      tasks.map((task) => {
        if (task.id == newTask.id) {
          return newTask;
        } else {
          return task;
        }
      })
    );
--------------------
// deleted
    setTasks(tasks.filter((task) => task.id != taskId));
