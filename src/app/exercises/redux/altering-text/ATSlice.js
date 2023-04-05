import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  messageText: "default text here",
};

const atSlice = createSlice({
  name: "at",
  initialState,
  reducers: {
    setMessageText: (state, action) => {
      return {
        ...state,
        messageText: action.payload,
      };
    },
  },
});

export const { setMessageText } = atSlice.actions;

export default atSlice.reducer;
