import axios, { AxiosResponse } from "axios";
import User from "../interfaces/User";
export const login = async (email: string, password: string) => {
  const credentials = {
    email: email,
    password: password,
  };
  const response: AxiosResponse<{ message: string; status: boolean }> =
    await axios.post(`http://localhost:8080/api/users/login`, credentials);
  return response;
};

export const registerUser = async (user: User) => {
  const response: AxiosResponse | void = await axios.post(
    `http://localhost:8080/api/users/save`,
    user
  );
  return response;
};
