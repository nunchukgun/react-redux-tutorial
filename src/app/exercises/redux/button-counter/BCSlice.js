import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  count: 0,
  abc: "def",
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
/**
 * setCount: (payload) => {
 *   return {
 *     type: 'bc/setCount',
 *     payload: payload
 *   }
 * }
 */

export default bcSlice.reducer;
