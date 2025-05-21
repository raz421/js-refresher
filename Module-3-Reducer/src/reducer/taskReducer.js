export default function taskreducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((task) => {
        if (task.id == action.newTask.id) {
          return action.newTask;
        } else {
          return task;
        }
      });
    }
    case "deleted": {
      return tasks.filter((task) => task.id != action.id);
    }
    default: {
      throw Error("this type is not present");
    }
  }
}
