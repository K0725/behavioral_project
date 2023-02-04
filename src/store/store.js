import { configureStore } from "@reduxjs/toolkit";
import ExcelSlice from "../slices/ExcelSlice";

export default configureStore({
  reducer: {
    Jsondata: ExcelSlice,
  },
});