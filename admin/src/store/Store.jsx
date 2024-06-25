import { configureStore } from "@reduxjs/toolkit";
import Adminslice from "../feature/Register/Registerslice";

export const Store = configureStore({
  reducer: {
    admin: Adminslice,
 
  },
});

