import { configureStore } from "@reduxjs/toolkit";
import bc from "./exercises/redux/button-counter/BCSlice";
export const store = configureStore({
  reducer: {
    bc,
  },
});
