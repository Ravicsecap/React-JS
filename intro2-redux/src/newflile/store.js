import { configureStore } from "@reduxjs/toolkit";
import notesSliceList from "./slices/notesSliceList";

export default configureStore({
  reducer: {
    notesReducers: notesSliceList,
  },
});