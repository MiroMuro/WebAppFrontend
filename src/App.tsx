import * as React from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import { getAllTasks } from "./service/TaskService";
import "./App.css";
import Task from "./interfaces/Task";
import { useAppDispatch } from "./hooks/hooks";
import { addAllTasks } from "./reducers/taskSlice";
import { TaskList } from "./components/Tasklist";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import NavBar from "./components/NavBar";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      const res: Array<Task> = await getAllTasks();
      dispatch(addAllTasks(res));
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/taskform" element={<TaskForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
