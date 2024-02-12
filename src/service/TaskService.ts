import axios, { AxiosResponse } from "axios";
import Task from "../interfaces/Task";

export const getAllTasks = async () => {
  const response: AxiosResponse = await axios.get(
    "http://localhost:8080/api/tasks"
  );

  const tasks: Array<Task> = response.data;
  console.log(tasks);
  return tasks;
};
