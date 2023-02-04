import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jsonData: [],
};

const JSONDataSlice = createSlice({
  name: "JSONDATA",
  initialState,
  reducers: {
    addData: (state, action) => {
      console.log(action.payload);
      state.jsonData.push(action.payload);
    },
  },
});

export const { addData } = JSONDataSlice.actions;

export default JSONDataSlice.reducer;