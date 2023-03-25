import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
