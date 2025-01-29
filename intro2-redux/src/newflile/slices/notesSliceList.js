import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    notes: []
  },
  reducers: {
    notes: (state, action) => {
        // state.notes =[...state.notes, action.payload]
      state.notes.push(action.payload);
    },

    deletenotes: (state, action) => {},
  },
});

export default noteSlice.reducer;
export const { notes, deletenotes } = noteSlice.actions;
