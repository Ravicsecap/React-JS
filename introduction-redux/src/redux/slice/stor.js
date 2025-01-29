// ****************Store*****************//

// a js object its hold apllication of an state and provide simply method to acess to the state from store
// 1) Dispatch action , 2) Rigester listener
// entier state and object tree of an apllication insde must be s/g store
// redux is simply way for state managment
// messageSlice is reducer we can same name inside store bcus already export default all reducers.
// then import messageSlice reducer

import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageslice";

export default configureStore({
  reducer: {
    // messageReducer:messageslice   // also then one name bcus export default messageSlice reducer
    messageReducer,
  },
});
