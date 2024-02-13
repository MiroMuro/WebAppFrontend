import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "../interfaces/Task";

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
      //console.log("YKSISSÄ", action.payload);
      state.tasks = [...state.tasks, action.payload];
    },
    addAllTasks: (state, action: PayloadAction<Array<Task>>) => {
      //console.log(state.tasks, "SLICESSÄ");
      //console.log(action.payload, "SLICESSÄ");
      state.tasks = action.payload;
    },
  },
});

export const { addTask, addAllTasks } = taskSlice.actions;

export default taskSlice.reducer;
