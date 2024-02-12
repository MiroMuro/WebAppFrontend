import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskSlice";
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

//Infer the "RootState" and "AppDispatch" types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {taskss: TasksState}
export type AppDispatch = typeof store.dispatch;
