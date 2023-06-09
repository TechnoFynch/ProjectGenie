import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: Object | null;
  token: String | null;
  mode: String;
}

const initialState: UserState = {
  user: null,
  token: null,
  mode: "dark",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState | null>) => {
      state.user = action.payload?.user ?? null;
      state.token = action.payload?.token ?? null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    switchMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { login, logout, switchMode } = authSlice.actions;
export default authSlice.reducer;
