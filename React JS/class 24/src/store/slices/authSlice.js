import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = {};
    });
  },
});

export const loginAction = createAsyncThunk("auth/login", async (objToSend) => {
  const response = await axios.post(`${BASE_URL}/login`, objToSend);
  return response;
});

export const { addToCart, removeToCart } = userSlice.actions;

export default cartSlice.reducer;
