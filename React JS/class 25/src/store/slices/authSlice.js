import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      console.log("loginAction.pending");
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      console.log("loginAction.fulfilled", action.payload);

      state.loading = false;
      state.error = null;
      state.data = action.payload.data;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      console.log("loginAction.rejected", action.payload);

      state.loading = false;
      state.error = action.payload.message;
      state.data = {};
    });
  },
});

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ objToSend, navigate }, { rejectWithValue }) => {
    const response = await axios.post(`${BASE_URL}/login`, objToSend);
    if (response.data.status) {
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      if (response.data.isVerify) {
        localStorage.setItem("usertoken", response.data.token);
        navigate("/");
        return response.data;
      } else {
        navigate("/OTPCode", {
          state: {
            email: objToSend.email,
          },
        });
      }
    } else {
      toast.error(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return rejectWithValue(response.data);
    }
  }
);

export const {} = authSlice.actions;

export default authSlice.reducer;
