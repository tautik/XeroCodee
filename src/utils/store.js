import { configureStore } from "@reduxjs/toolkit";
import workSlice from "./workSlice";

const store = configureStore({
  reducer: {
    toogleWork: workSlice,
  },
});

export default store;
