import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import { getAllTasks } from "./service/TaskService";
import "./App.css";
import Task from "./interfaces/Task";
//import { store } from "./store";
import { useAppDispatch } from "./hooks/hooks";
import { addAllTasks, addTask } from "./reducers/taskSlice";
import { TaskList } from "./components/Tasklist";
function App() {
  const dispatch = useAppDispatch();

  //store.subscribe(() => console.log(store.getState()));
  useEffect(() => {
    const newTask: Task = {
      id: 4,
      title: "do the swag",
      description: "I am doing the swag",
      completed: false,
    };

    const fetchTasks = async () => {
      const res: Array<Task> = await getAllTasks();
      dispatch(addAllTasks(res));
      dispatch(addTask(newTask));
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <div>Hello world!</div>
      <TaskList />
      <TaskForm />
    </div>
  );
}

export default App;
