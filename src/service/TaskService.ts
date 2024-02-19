import axios, { AxiosError, AxiosResponse } from "axios";
import Task from "../interfaces/Task";
import User from "../interfaces/User";
export const getAllTasks = async () => {
  const response: AxiosResponse = await axios.get(
    "http://localhost:8080/api/tasks"
  );

  const tasks: Array<Task> = response.data;
  //console.log(tasks);
  return tasks;
};

export const appendTaskToDb = async (task: Task) => {
  const response: AxiosResponse<Task> = await axios.post(
    "http://localhost:8080/api/tasks",
    task
  );
  return response;
};

export const DeleteTaskFromDb = async (id: number) => {
  const response: AxiosResponse | void = await axios
    .delete(`http://localhost:8080/api/tasks/${id}`)
    .catch((error) => {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    });
  return response;
};

export const registerUser = async (user: User) => {
  const response: AxiosResponse | void = await axios.post(
    `http://localhost:8080/api/users/save`,
    user
  );
  return response;
};

export const login = async (email: string, password: string) => {
  const credentials = {
    email: email,
    password: password,
  };
  const response: AxiosResponse<{ message: string; status: boolean }> =
    await axios.post(`http://localhost:8080/api/users/login`, credentials);
  return response;
};

//export const Login = async(username:string, password:string) => {
//const response: AxiosResponse = await axios.post(`http://localhost:8080/login`)
//}
