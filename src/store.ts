import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskSlice";
import userReducer from "./reducers/userSlice";
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    users: userReducer,
  },
});

//Infer the "RootState" and "AppDispatch" types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {taskss: TasksState}
export type AppDispatch = typeof store.dispatch;
