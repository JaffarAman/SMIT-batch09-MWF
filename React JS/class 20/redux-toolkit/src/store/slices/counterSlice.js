import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      state.count = ++state.count;
      console.log(state.count, "addCounter");
    },
  },
});

const { actions } = counterSlice;
export const { addCounter } = actions;

export default counterSlice.reducer;
