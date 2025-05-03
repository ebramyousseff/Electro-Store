import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types";



const initialState: UserState = {
  email: null,
  displayName: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
    },
    clearUser(state) {
      state.email = null;
      state.displayName = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;