import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "../interfaces/Task";
import { appendTaskToDb } from "../service/TaskService";
import { AxiosResponse } from "axios";
import type { AppDispatch } from "../store";
import { DeleteTaskFromDb } from "../service/TaskService";
export interface TaskState {
  tasks: Array<Task>;
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    addAllTasks: (state, action: PayloadAction<Array<Task>>) => {
      state.tasks = action.payload;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
  },
});

export const { addTask, addAllTasks, deleteTask } = taskSlice.actions;

export const saveTask = (task: Task) => {
  return async (dispatch: AppDispatch) => {
    const responseTask: AxiosResponse<Task> = await appendTaskToDb(task);
    dispatch(addTask(responseTask.data));
  };
};

export const removeTask = (id: number) => {
  return async (dispatch: AppDispatch) => {
    const response: AxiosResponse | void = await DeleteTaskFromDb(id);

    if (response) {
      dispatch(deleteTask(id));
    }
    return null;
  };
};

export default taskSlice.reducer;
