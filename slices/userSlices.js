import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
}


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

//Selectors
export const selectUserData = (state) => state.user.data;

export default userSlice.reducer;