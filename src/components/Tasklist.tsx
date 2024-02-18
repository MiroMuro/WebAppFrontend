import { useAppSelector } from "../hooks/hooks";
import Task from "../interfaces/Task";
import { removeTask } from "../reducers/taskSlice";
import { useAppDispatch } from "../hooks/hooks";
import type { AppDispatch } from "../store";

export const TaskList = () => {
  const storestate: Array<Task> = useAppSelector((state) => state.tasks.tasks);

  const dispatch: AppDispatch = useAppDispatch();

  const del = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      <ul>
        {storestate.map((task) => (
          <li style={{ border: "3px solid white", margin: "10px" }}>
            <div>Title: {task.title}</div>
            <div>Descrption: {task.description}</div>
            <div>Completed: {task.completed ? "yes" : "no"}</div>
            <div>
              <button onClick={() => del(task.id)}>Delete</button>
              <button>Edit</button>
            </div>
            </li>
        ))}
      </ul>
    </div>
  );
};
