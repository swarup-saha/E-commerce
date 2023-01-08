import { createSlice } from "@reduxjs/toolkit";

const userRedux = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    error: false,
    currentUser: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userRedux.actions;
export default userRedux.reducer;
