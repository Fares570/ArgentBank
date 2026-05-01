import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile, updateUsername } from "./userThunks.js";
import { logout } from "../auth/authSlice.js";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        if (state.profile) state.profile.userName = action.payload.userName;
      })
      .addCase(logout, (state) => {
        state.profile = null;
        state.status = "idle";
        state.error = null;
      });
  },
});

export default userSlice.reducer;
