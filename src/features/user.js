import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ name: "", id: 0 }],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload);
    },
  },
});

export const { update, remove } = userSlice.actions;
export default userSlice.reducer;
