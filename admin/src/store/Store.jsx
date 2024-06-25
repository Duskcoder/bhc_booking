import { configureStore } from "@reduxjs/toolkit";
import Adminslice from "../feature/Register/Registerslice";
import PropertieSlice from "../feature/admin/PropertieSlice";
export const Store = configureStore({
  reducer: {
    admin: Adminslice,
    product:PropertieSlice
  },
});

