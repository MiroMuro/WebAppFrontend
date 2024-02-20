import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "../interfaces/User";
export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    id: 0,
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
