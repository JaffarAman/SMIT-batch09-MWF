import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 100,
};

const counterSlice = createSlice({
  name: "counter",
  reducers: {
    addCounter: (state, action) => {
      state.count = ++state.count;
      console.log("state", state.count);
      console.log("action", action.payload);
    },
  },
  initialState,
});

export const { addCounter } = counterSlice.actions;
export default counterSlice.reducer;
