import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const bcSlice = createSlice({
  name: "bc",
  initialState,
  reducers: {
    setCount: (state, action) => {
      return {
        ...state,
        count: action.payload,
      };
    },
  },
});

export const { setCount } = bcSlice.actions;

export default bcSlice.reducer;
