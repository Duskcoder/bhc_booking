import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Adminlogin } from "../Register/Registerservice"
import { toast } from "react-toastify";

// Admin
export const Adminlogincreate = createAsyncThunk(
    "create",
    async (data, thunkApi) => {
        try {
            const response = await Adminlogin(data);
            return response;
        } catch (err) {
            toast.error(err?.response?.data?.message)
            return thunkApi.rejectWithValue(err);
        }
    }
);


















const initialState = {
    isSuccess: false,
    isLoading: false,
    isError: false,
    shopgetOne: {},
    errormessage: "",
    allUser: [],
    allVendor: []
};

export const Adminslice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        resetSuccessState: (state) => {
            state.isSuccess = false;
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(Adminlogincreate.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(Adminlogincreate.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.isError = false;
                if (state.isSuccess) {
                    toast.success("Login Successfully")
                }

            })
            .addCase(Adminlogincreate.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.errormessage = action.error;
            })














    },
});
export const { resetSuccessState } = Adminslice.actions;
export default Adminslice.reducer;
