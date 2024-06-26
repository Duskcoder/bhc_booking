import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { mainTainenceGet, mainTainencePatch } from "./maintainenceService";

export const maintaenanceGetFromServer = createAsyncThunk(
  "get-main",
  async (_, thunkApi) => {
    try {
      const response = await mainTainenceGet();
      return response?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const mainTainencePatchServer = createAsyncThunk(
  "path-amin",
  async (data, thunkApi) => {
    try {
      const response = await mainTainencePatch(data);
       thunkApi.dispatch(maintaenanceGetFromServer())
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  mainTainList: [],
};

export const mainSlice = createSlice({
  name: "maintain",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(maintaenanceGetFromServer.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(maintaenanceGetFromServer.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.mainTainList = action.payload;
      })
      .addCase(maintaenanceGetFromServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(mainTainencePatchServer.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(mainTainencePatchServer.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(mainTainencePatchServer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});


export default mainSlice.reducer;