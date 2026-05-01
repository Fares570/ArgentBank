import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios.js";

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/user/profile");
      return res.data.body;
    } catch (e) {
      return rejectWithValue("Failed to fetch profile");
    }
  }
);

export const updateUsername = createAsyncThunk(
  "user/updateUsername",
  async (userName, { rejectWithValue }) => {
    try {
      const res = await api.put("/user/profile", { userName });
      return res.data.body;
    } catch (e) {
      return rejectWithValue("Failed to update username");
    }
  }
);