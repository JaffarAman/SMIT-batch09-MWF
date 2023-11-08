import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counterSlice,
  },
});

export default store;
