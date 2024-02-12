import { useAppSelector } from "../hooks/hooks";
import Task from "../interfaces/Task";
export const TaskList = () => {
  const storestate: Array<Task> = useAppSelector((state) => state.tasks.tasks);

  return (
    <div>
      <ul>
        {storestate.map((task) => (
          <li style={{ border: "3px solid white", margin: "10px" }}>
            <div>Title: {task.title}</div>
            <div>Descrption: {task.description}</div>
            <div>Completed: {task.completed ? "no" : "yes"}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
