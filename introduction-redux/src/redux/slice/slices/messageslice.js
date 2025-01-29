// ******************* Store************************//
// inside the store i have slice for reducers like message, login and so many state of slice.
// must be one store.. store , slice and reducers provide by [@redux/toolkit]
// slice have take string name, intial state value and one or more reducers
// reducers take state and action
// and also export the action , state means intial data and action used for if action trigged mean delete,update, multiplication so many action to action update state  intial data.
// state contian initialState object
// action contion payload and type mean dispatch action
// reducers bind a single object is reducer.

import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messageSlice",
  initialState: {
    message: "",
    COUNTER: 0,
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetMessage: (state, action) => {
      state.message = "";
    },
  },
});

export default messageSlice.reducer;

export const { setMessage, resetMessage } = messageSlice.actions;
