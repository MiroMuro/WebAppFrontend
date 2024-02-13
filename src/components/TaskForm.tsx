import { useState } from "react";
import Task from "../interfaces/Task";
import { addTask } from "../reducers/taskSlice";

const TaskForm = () => {
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    completed: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });

    console.log(newTask);
  };

  const addTask = () => {
    return "xd";
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <div>
          Title:
          <input
            name="title"
            value={newTask.title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
          ></input>
        </div>
        <div>
          Description:
          <input
            name="description"
            value={newTask.description}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
          ></input>
          <div>
            completed:
            <div>
              No
              <input
                type="radio"
                name="completed"
                value="false"
                onChange={() => setNewTask({ ...newTask, completed: false })}
              ></input>
            </div>
            <div>
              Yes
              <input
                type="radio"
                name="completed"
                value="true"
                onChange={() => setNewTask({ ...newTask, completed: true })}
              ></input>
            </div>
          </div>
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
