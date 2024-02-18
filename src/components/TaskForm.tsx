import { useState } from "react";
import Task from "../interfaces/Task";
import { saveTask } from "../reducers/taskSlice";
import { useAppDispatch } from "../hooks/hooks";
import type { AppDispatch } from "../store";

const TaskForm = () => {
  const dispatch: AppDispatch = useAppDispatch();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(saveTask(newTask));
    setNewTask({
      id: 0,
      title: "",
      description: "",
      completed: false,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
