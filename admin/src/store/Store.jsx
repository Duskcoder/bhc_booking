import { configureStore } from "@reduxjs/toolkit";
import Adminslice from "../feature/Register/Registerslice";
import PropertieSlice from "../feature/admin/PropertieSlice";
import mainSlice from "../feature/maintainence/mainTainenceSlice"
export const Store = configureStore({
  reducer: {
    admin: Adminslice,
    product:PropertieSlice,
    main:mainSlice
  },
});

