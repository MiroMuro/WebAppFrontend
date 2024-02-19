import * as React from "react";
import { Link } from "react-router-dom";
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
import Button from "@mui/material/Button";
import RegistrationForm from "./components/RegistrationForm";
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
      <Button variant="contained">
        <Link to="/">default</Link>
      </Button>
      <Button variant="contained">
        <Link to="/home">Home</Link>
      </Button>
      <Button variant="contained">
        <Link to="/login">Login</Link>
      </Button>
      <Button variant="contained">
        <Link to="/tasklist">Tasks</Link>
      </Button>
      <Button variant="contained">
        <Link to="taskform">Taskform</Link>
      </Button>
      <Button variant="contained">
        <Link to="register">Register</Link>
      </Button>
      <Routes>
        <Route path="/" element={<div>Hello world!</div>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/taskform" element={<TaskForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
