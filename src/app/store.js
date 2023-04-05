import { configureStore } from "@reduxjs/toolkit";
import BCSlice from "./exercises/redux/button-counter/BCSlice";
import ATSlice from "./exercises/redux/altering-text/ATSlice";
export const store = configureStore({
  reducer: {
    bc: BCSlice,
    at: ATSlice,
  },
});
